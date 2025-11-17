import{j as r,r as f}from"./iframe-DBiC_ZnR.js";import{t as o,F as z}from"./Modal-CFT07oZI.js";import{L as R}from"./Label-xzCvdkIk.js";import{B as b}from"./Button-Dz2v4SBO.js";import{S as x}from"./Section-PPvrLtVe.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CtV33ye2.js";import"./flowComponent-D0XIYrNX.js";import"./index-Bp9tFnUt.js";import"./index-CVV0Ew5-.js";import"./context-BMyT49yV.js";import"./Button-L3lWig61.js";import"./utils-DtstTdJR.js";import"./ProgressBar-DmZeIXpS.js";import"./Hidden-Dw7083pg.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-7Lcog2P0.js";import"./useFocusRing-DtYok8JN.js";import"./useFocusable-CIN_gk5Z.js";import"./RSPContexts-BN9qRqww.js";import"./Collection-CSHv5Add.js";import"./CollectionBuilder-Bq-WlyGC.js";import"./SelectionIndicator-CqAhSFEy.js";import"./Separator-CJkt4YbH.js";import"./browser-DU6w9x_W.js";import"./useLocalizedStringFormatter-D7iDpTHP.js";import"./useStatic-DEZxNC-q.js";import"./FileCardList-BQ0PrUKt.js";import"./IconWarning-CK2ZGKNK.js";import"./Avatar-BwVc0hzE.js";import"./AlertIcon-_-sw5S_n.js";import"./Image-D5b2Er5_.js";import"./Text-BcLTITKQ.js";import"./EmulatedBoldText-ClmR1Uhh.js";import"./Link-D0ngLqvb.js";import"./ControlledNotification-BYDi47LJ.js";import"./LoadingSpinner-TzV_vALb.js";import"./LayoutCard-DujkBG9b.js";import"./Accordion-BPGdA9fR.js";import"./ActionGroup-D-mz5Ka-.js";import"./getActionGroupSlot-CAWRcoDx.js";import"./Alert-D-T0L3mL.js";import"./AlertBadge-hinnerB-.js";import"./Align-bv03_ePf.js";import"./AvatarStack-BuYJ-fes.js";import"./BigNumber-CBIvAU_0.js";import"./Breadcrumb-B-xNS-GU.js";import"./Heading-DAHW42f0.js";import"./Legend-ByhIQaF3.js";import"./Color-CORewqWi.js";import"./TableFooterRow-BbDFkWI7.js";import"./SkeletonText-CiTXgN5i.js";import"./Content-CsyIBpFy.js";import"./CounterBadge-DytJIUgP.js";import"./DonutChart-D3VLTo_J.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-C4HRucEG.js";import"./Header-DKDAJOov.js";import"./Initials-BFBRnihA.js";import"./InlineCode-Bt3wPgje.js";import"./Separator-BeLwNHQN.js";import"./MessageSeparator-_4Z2k_CE.js";import"./NavigationGroup-CjgLGw0v.js";import"./Notification-GKnJp8ZA.js";import"./NotificationProvider-DzFmVfpi.js";import"./ProgressBar-2UwBkw3O.js";import"./Rating-DLMdLSIQ.js";import"./Skeleton-BBSK6hjL.js";const Ir={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},c={args:{rows:1,autoResizeMaxRows:5}},m={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,inputRef:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <MarkdownEditor {...props} inputRef={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};const Hr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{c as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,m as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Hr as __namedExportsOrder,Ir as default};
