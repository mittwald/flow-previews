import{j as r,r as f}from"./iframe-C3RmV_vn.js";import{m as o,F as z}from"./Modal-CjHUQUiD.js";import{L as R}from"./Label-D3eoPZkV.js";import{B as b}from"./Button-DaazfuBy.js";import{S as x}from"./Section-BPR37q8p.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./dynamic-YRcCSNg3.js";import"./flowComponent-DFlBLvPJ.js";import"./index-C-ZjcPlt.js";import"./index-hkSQrj3P.js";import"./Popover-BrQ9WlIY.js";import"./context-BR4xGGrb.js";import"./useStatic-_h3OjEkL.js";import"./OverlayTrigger-IdlugrEk.js";import"./Dialog-K1R3KO66.js";import"./Button-CgyHIJsr.js";import"./utils-D8HC0yU-.js";import"./ProgressBar-CDrPZwEB.js";import"./Hidden-CChVoDJ-.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DCRPXx9V.js";import"./useFocusRing-BIAWuC29.js";import"./useFocusable-C2zASQXP.js";import"./RSPContexts-BOh9wduO.js";import"./OverlayArrow-FKi2RhHZ.js";import"./useControlledState-NromYU6N.js";import"./Collection-D7H86Y8V.js";import"./CollectionBuilder-CsxHJ8eB.js";import"./SelectionIndicator-BJ_0QZSn.js";import"./Separator-ev5cyWKA.js";import"./browser-DymlHLTF.js";import"./useLocalizedStringFormatter-ChCCrZ8e.js";import"./ControlledNotification-CByqMhuw.js";import"./ClearPropsContextView-Brt3ROUs.js";import"./LoadingSpinner-DyOalyyw.js";import"./IconWarning-BE2KSBI-.js";import"./LayoutCard-De9YTy0g.js";import"./Accordion-DeGc61A7.js";import"./Action-C26yRlV4.js";import"./getActionGroupSlot-BgdQ1S-5.js";import"./ActionGroup-DaI6rKw9.js";import"./Alert-D_C58G56.js";import"./AlertIcon-0DtXBii2.js";import"./AlertBadge-CNKskcx3.js";import"./Text-CaziZxQU.js";import"./EmulatedBoldText-CI-5ODle.js";import"./Align-DNYCt6uS.js";import"./TableFooterRow-BZnfistZ.js";import"./SkeletonText-BpA-RQWQ.js";import"./Avatar-D1juHQpF.js";import"./AvatarStack-C5feK4ne.js";import"./Badge-DG403MXU.js";import"./BigNumber-CgKfebEz.js";import"./Breadcrumb-B0tIpvZK.js";import"./Link-DvQUX475.js";import"./Heading-BU4qnENK.js";import"./Legend-BSZ3J9ai.js";import"./FileCardList-DCQZnQsv.js";import"./Image-B0ryPUSh.js";import"./CodeBlock-DzUKpqG9.js";import"./CopyButton-DlsGGdL3.js";import"./Tooltip-D7tr0CXI.js";import"./react-children-utilities-Mj0r6IMA.js";import"./Color-ByegzaLv.js";import"./Content-DSufA99H.js";import"./ContextualHelpTrigger-BQ6k47a4.js";import"./CounterBadge-Ca1OGzZj.js";import"./DonutChart-6V9LvPQT.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-CI4Fulyk.js";import"./Header-DaWWc1Jz.js";import"./Initials-6SKCyCkr.js";import"./InlineCode-CdmNZpBo.js";import"./LabeledValue-Ji1sW1K_.js";import"./PopoverTrigger-nHTqFl4u.js";import"./Markdown-DnuGI4cM.js";import"./Separator-B2g7KZrm.js";import"./Message-DlANTTrI.js";import"./MessageSeparator-750v-t38.js";import"./NavigationGroup-CEkjEBpj.js";import"./Notification-CELsKl2c.js";import"./NotificationProvider-Ceb0o9Cl.js";import"./ProgressBar-DOFcIVSi.js";import"./Rating-Cu404PkR.js";import"./Skeleton-tU7Rn1rq.js";const re={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
