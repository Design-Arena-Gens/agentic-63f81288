"use client";

import { useCallback } from "react";
import { useMatchStore } from "@/lib/store/matchStore";
import { GestureInput } from "@/lib/controls/gestureControls";

export const ControlsOverlay = () => {
  const { handleGesture, gesturePreview } = useMatchStore();

  const onPointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    (event.target as HTMLElement).setPointerCapture(event.pointerId);
    (event.currentTarget.dataset as any).startX = event.clientX;
    (event.currentTarget.dataset as any).startY = event.clientY;
    (event.currentTarget.dataset as any).startTime = event.timeStamp;
  }, []);

  const onPointerUp = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const dataset = event.currentTarget.dataset as any;
      const gesture: GestureInput = {
        type: Math.abs(event.clientX - dataset.startX) > 20 ? "SWIPE" : "TAP",
        start: { x: dataset.startX, y: dataset.startY },
        end: { x: event.clientX, y: event.clientY },
        durationMs: event.timeStamp - dataset.startTime,
        fingers: 1,
      };
      handleGesture(gesture);
    },
    [handleGesture]
  );

  return (
    <section className="section-card">
      <header className="panel-heading" style={{ marginBottom: "1rem" }}>
        <h2 className="panel-title" style={{ fontSize: "1.1rem" }}>
          Touch Controls
        </h2>
        <span className="chip">Mobile gesture sandbox</span>
      </header>
      <div className="touch-pad" onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
        <p style={{ fontSize: "0.9rem", color: "var(--text-subtle)" }}>
          Swipe, tap, or hold to preview actions.
        </p>
        {gesturePreview && <div className="gesture-indicator">{gesturePreview.type}</div>}
      </div>
      <ul
        className="tag-list"
        style={{
          marginTop: "1rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "0.75rem",
          fontSize: "0.85rem",
        }}
      >
        <li>• Swipe with one finger = ground pass</li>
        <li>• Swipe with two fingers = lofted cross</li>
        <li>• Hold to build shooting power</li>
        <li>• Double-tap for contextual skill moves</li>
      </ul>
    </section>
  );
};
