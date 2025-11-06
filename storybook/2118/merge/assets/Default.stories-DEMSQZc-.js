import{j as r,r as f}from"./iframe-CPn2ZlG8.js";import{m as o,F as z}from"./Modal-BBOS47oM.js";import{L as R}from"./Label-Opx6KdMe.js";import{B as b}from"./Button-i2RXMGoH.js";import{S as x}from"./Section-K5CfbtJu.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CmzXv2ZH.js";import"./flowComponent-D5fQrT-l.js";import"./index-Db6BMMtx.js";import"./index-B0eWxAoc.js";import"./Popover-BXUF-6SC.js";import"./context-CgTN8SSG.js";import"./useStatic-BnTfOIpp.js";import"./OverlayTrigger-20DAFHoE.js";import"./Dialog-CXw6CUzT.js";import"./Button-Di4iIPFk.js";import"./utils-DBul4rcK.js";import"./ProgressBar-CJ8nwOMy.js";import"./Hidden-rE78fkWj.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BiAR75ic.js";import"./useFocusRing-Bif2ggnn.js";import"./useFocusable-C96YDlM5.js";import"./RSPContexts-CJHyh8nT.js";import"./OverlayArrow-Ck0nDntZ.js";import"./useControlledState-CZXOD-hn.js";import"./Collection-B8r3AE3V.js";import"./CollectionBuilder-DpjnogN1.js";import"./SelectionIndicator-BcoqESp_.js";import"./Separator-B1EP0OSh.js";import"./browser-Cl13ZrDl.js";import"./useLocalizedStringFormatter-3u0Ls056.js";import"./ControlledNotification-BEs41KlO.js";import"./ClearPropsContextView-BhabDAmt.js";import"./LoadingSpinner-mgkNzsmz.js";import"./IconWarning-BTNOc1CF.js";import"./LayoutCard-C_hSjeDr.js";import"./Accordion-B-bChxW6.js";import"./Action-Dgdncsxu.js";import"./getActionGroupSlot-D7tF_HIo.js";import"./ActionGroup-gwUYpalQ.js";import"./Alert-Ug9GHVUz.js";import"./AlertIcon-zTj1UJpO.js";import"./AlertBadge-BsQaA3x6.js";import"./Text-6RCNpXVe.js";import"./EmulatedBoldText-1j8ixKnD.js";import"./Align-DE9bebnk.js";import"./TableFooterRow-B5LtY95q.js";import"./SkeletonText-oiPGeqDP.js";import"./Avatar-DDyQczM4.js";import"./AvatarStack-CWZ-VL73.js";import"./Badge-D9v8JAmm.js";import"./BigNumber-C4G7-3T-.js";import"./Breadcrumb-Bacspdd1.js";import"./Link-DVlBL-qV.js";import"./Heading-BzbKq0dK.js";import"./Legend-DDMMG7bH.js";import"./FileCardList-rzh9hTjl.js";import"./Image-C-mKiOK_.js";import"./CodeBlock-DfQLW9jR.js";import"./CopyButton-BPFZIEl4.js";import"./Tooltip-BEM5VXj8.js";import"./react-children-utilities-WPpO_PnD.js";import"./Color-BEtva2JY.js";import"./Content-35wcbQLb.js";import"./ContextualHelpTrigger-BF0zQddW.js";import"./CounterBadge-DQvxwwoY.js";import"./DonutChart-BrF9Zm5P.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DGRfp6b0.js";import"./Header-DnNd6Njs.js";import"./Initials-Bv6RP1-8.js";import"./InlineCode-CHc7o_jp.js";import"./LabeledValue-j0cEpKgE.js";import"./PopoverTrigger-CMl9e6LO.js";import"./Markdown-Coe6N29n.js";import"./Separator-CJJgusYM.js";import"./Message-Dqi0-r_q.js";import"./MessageSeparator-CroayyHM.js";import"./NavigationGroup-qSfETvJA.js";import"./Notification-r_T3n36Q.js";import"./NotificationProvider-u0HbSQig.js";import"./ProgressBar-BXbWnBwm.js";import"./Rating-DIBuOTMV.js";import"./Skeleton-1myRvyzI.js";const re={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    allowResize: true
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    allowHorizontalResize: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
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
}`,...h.parameters?.docs?.source}}};const ee=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,ee as __namedExportsOrder,re as default};
