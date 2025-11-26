import{j as r,r as f}from"./iframe-g-XFBo2M.js";import{t as o,F as z}from"./Modal-HN7mUc_p.js";import{L as R}from"./Label-C0aRk6NU.js";import{B as b}from"./Button-CgOKxPbj.js";import{S as x}from"./Section-BXzmDK8J.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-y0BvrcCC.js";import"./flowComponent-BTFCKpJC.js";import"./index-Di8R43pA.js";import"./index-D0vwgSdS.js";import"./context-MFH_cEi3.js";import"./Button-F2DpSCEE.js";import"./utils-BLpr0TUC.js";import"./ProgressBar-DLmwbc5V.js";import"./Hidden-CbPhQWFj.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BmipQpJh.js";import"./useFocusRing-0SVajdfI.js";import"./useFocusable-BhABskQh.js";import"./RSPContexts-FyZiT-dA.js";import"./Collection-wAduGIRO.js";import"./CollectionBuilder-DM14duJF.js";import"./SelectionIndicator-CoVhmIZH.js";import"./Separator-tfjl_R7-.js";import"./browser-aGtpEYpD.js";import"./useLocalizedStringFormatter-Cyj6BGOX.js";import"./useStatic-BQUJQZNk.js";import"./FileCardList-DoQkIDuX.js";import"./IconWarning-IhhFy3Bx.js";import"./Avatar-X3dATXB7.js";import"./AlertIcon-DJoeY47w.js";import"./Image-MSIXUbcy.js";import"./Text-vL1LV049.js";import"./EmulatedBoldText-weZy4b5C.js";import"./Link-CRZIDf5q.js";import"./ControlledNotification-COssbRo0.js";import"./LoadingSpinner-hwBIUj3t.js";import"./Flex-Bsm0K3ZO.js";import"./Accordion-DgcwWYzu.js";import"./ActionGroup-1WZPcRd7.js";import"./Alert-BdQYV_b8.js";import"./AlertBadge-K2HkqN1E.js";import"./Align-CusiQaMs.js";import"./AvatarStack-DseM1MNa.js";import"./BigNumber-CTRFWhZ2.js";import"./Breadcrumb-DygeFtpj.js";import"./Heading-D8TOp1jB.js";import"./Legend-OCWjJfVR.js";import"./Color-BlRFVK3w.js";import"./TableFooterRow-lK-uAiGD.js";import"./SkeletonText-CtpLmtNt.js";import"./Content-BwCOhlmF.js";import"./CounterBadge-C0r21egP.js";import"./DonutChart-BDWUAJsd.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-XlPrj5S3.js";import"./Header-C5E3rf3q.js";import"./Initials-B759V3Ss.js";import"./InlineCode-bJV2810L.js";import"./LayoutCard-DBrjjt1J.js";import"./Separator-KtU-Fy3c.js";import"./MessageSeparator-Dw1kKEgh.js";import"./NavigationGroup-Dgf5bfuu.js";import"./Notification-yM0bJJk7.js";import"./NotificationProvider-4So095Rx.js";import"./ProgressBar-Bj_6Z6Bp.js";import"./Rating-ci1cuaCo.js";import"./Skeleton-MXCSZONm.js";const Ir={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},c={args:{rows:1,autoResizeMaxRows:5}},m={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...n.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "horizontal"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: "vertical",
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: props => {
    const editorRef = useRef<HTMLTextAreaElement | null>(null);
    const handleFocus = () => {
      if (editorRef.current) {
        editorRef.current.focus();
      }
    };
    return <Section>
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};const Hr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{c as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,m as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Hr as __namedExportsOrder,Ir as default};
