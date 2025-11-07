import{j as r,r as f}from"./iframe-DhEtuAZk.js";import{m as o,F as z}from"./Modal-DH23VA8R.js";import{L as R}from"./Label-BGOtPgJY.js";import{B as b}from"./Button-BY9Kr7Ye.js";import{S as x}from"./Section-D4Gr2eQE.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-CwxkBJO8.js";import"./flowComponent-Sd9fxQN7.js";import"./index-Cjw7dVYj.js";import"./index-DWS6YMK5.js";import"./Popover-bxB2am_R.js";import"./context-D6NPEI3P.js";import"./useStatic-OTFolAlH.js";import"./OverlayTrigger-BYK82yFU.js";import"./Dialog-CGia85P_.js";import"./Button-DH0rVXA4.js";import"./utils-DSKmOAaE.js";import"./ProgressBar-CCRGuqks.js";import"./Hidden-Dx0nOzpY.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B4_4eL8K.js";import"./useFocusRing-CtGm1hSf.js";import"./useFocusable-GlgNOWPt.js";import"./RSPContexts-CP8S-33J.js";import"./OverlayArrow-D5AF8TQx.js";import"./useControlledState-Dj5UiPRe.js";import"./Collection-DTMrpJoY.js";import"./CollectionBuilder-BPnFrNW_.js";import"./SelectionIndicator-C_Yqy7JN.js";import"./Separator-qstkXCxY.js";import"./browser-CRwqe8Ti.js";import"./useLocalizedStringFormatter-TlIqT86R.js";import"./ControlledNotification-B3y-_NHJ.js";import"./ClearPropsContextView-CacYGh9N.js";import"./LoadingSpinner-DZTinZ99.js";import"./IconWarning-CZNr6BH3.js";import"./LayoutCard-DyYCqBUd.js";import"./Accordion-AwI-eLcX.js";import"./Action-BVtpAmgk.js";import"./getActionGroupSlot-B2enF2gG.js";import"./ActionGroup-ESJbAOgN.js";import"./Alert-C0_k9BWo.js";import"./AlertIcon-CX41xz4j.js";import"./AlertBadge-Bu1tkE54.js";import"./Text-CrxTC35E.js";import"./EmulatedBoldText-DZREZbVk.js";import"./Align-DoePDGix.js";import"./TableFooterRow-B5odsCqN.js";import"./SkeletonText-CXTn8PEF.js";import"./Avatar-DA2EpUV0.js";import"./AvatarStack-BTUWictn.js";import"./Badge--cveCoN-.js";import"./BigNumber-CXH91pve.js";import"./Breadcrumb-Dm-Ab6kG.js";import"./Link-CtepCC57.js";import"./Heading-w8VDel3v.js";import"./Legend-Cz5DfYh0.js";import"./FileCardList-Dskx08JL.js";import"./Image-rd2HOgTo.js";import"./CodeBlock-BbN4ELkc.js";import"./CopyButton-Bc4gZ0dZ.js";import"./Tooltip-OwQuKknw.js";import"./react-children-utilities-goMvo_yH.js";import"./Color-CRJdMals.js";import"./Content-B5pw8O7y.js";import"./ContextualHelpTrigger-_Yaxcn4v.js";import"./CounterBadge-oC6FtYIY.js";import"./DonutChart-CwT0BVij.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-BD1lBLs6.js";import"./Header-aUvXKfPp.js";import"./Initials-BLkxqdWL.js";import"./InlineCode-BaTFar_i.js";import"./LabeledValue-Q6uf6T0w.js";import"./PopoverTrigger-DeiqVe2R.js";import"./Markdown-OhbZtiCz.js";import"./Separator-yVzKMq8d.js";import"./Message-BKYnO8Sw.js";import"./MessageSeparator-CZBnsaEy.js";import"./NavigationGroup-DmIc1IFk.js";import"./Notification-Bo-h0jCk.js";import"./NotificationProvider-Ew3gKcP-.js";import"./ProgressBar-DuPgLyUc.js";import"./Rating-k4iMHwyu.js";import"./Skeleton-Bf4mjzjC.js";const re={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,inputRef:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const ee=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,ee as __namedExportsOrder,re as default};
