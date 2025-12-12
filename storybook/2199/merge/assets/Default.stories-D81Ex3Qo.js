import{j as r,r as f}from"./iframe-Ckegua2-.js";import{r as o,g as z}from"./TimeField-CnyVG1v1.js";import{L as R}from"./Label-DbzN7GKj.js";import{B as b}from"./Button-DoXsYGKN.js";import{S as x}from"./Section-hzyeLE3m.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-B0wHrVrI.js";import"./mergeRefs-CXKhTFR6.js";import"./index-CxQn1E-Y.js";import"./clsx-B-dksMZM.js";import"./Accordion-B_N1C8pF.js";import"./dynamic-6Flvv8a3.js";import"./IconWarning-Gc4Ng5zo.js";import"./ActionGroup-BqOUYrfn.js";import"./Alert-JZD3v-jA.js";import"./AlertIcon-Dy5HewGT.js";import"./useLocalizedStringFormatter-Q4I4FS-7.js";import"./context-Dskisrvm.js";import"./AlertBadge-CARGCkX2.js";import"./Text-Bc5eZX2G.js";import"./browser-CQVzEu0I.js";import"./utils-CYmNuJtI.js";import"./EmulatedBoldText-DGrw2Xfi.js";import"./Align-Dm8_YoZ3.js";import"./Popover-D8pa3B3p.js";import"./context-CF7hXZMA.js";import"./Button-DWZpmyCC.js";import"./ProgressBar-DIFZ8Kql.js";import"./Hidden-kHVBbfV7.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-BMhGy4sM.js";import"./useFocusable-oEaC2Y8Z.js";import"./RSPContexts-B2_NTObV.js";import"./Collection-ezizCYTp.js";import"./CollectionBuilder-BabOu3fh.js";import"./SelectionIndicator-BgkqkO5H.js";import"./Separator-B9FzUmmI.js";import"./useStatic-CoW39G77.js";import"./OverlayTrigger-DO7Mueac.js";import"./TableFooterRow-CHZHJv30.js";import"./SkeletonText-BLLVdmDs.js";import"./Avatar-B-hMO_N2.js";import"./AvatarStack-C33GWe6X.js";import"./Badge-DMon6P2Z.js";import"./BigNumber-CA9AE9Qf.js";import"./Breadcrumb-DXpAsBUS.js";import"./Link-D6ZKnidg.js";import"./Heading-CD3Wslox.js";import"./Legend-pYfOY7A3.js";import"./FileCardList-CcmxMc-_.js";import"./Image-B-kLfcch.js";import"./Color-BRQcMNt3.js";import"./Content-Dg-EjuzS.js";import"./ContextualHelpTrigger-CXW4Wy_s.js";import"./CounterBadge-BSnWWYKA.js";import"./DonutChart-Df00Mh3q.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-DlPxXhrq.js";import"./Header-DFUpbH_h.js";import"./Initials-C9kUHQxR.js";import"./InlineCode-CKyRvQPe.js";import"./PopoverTrigger-Cbnk17aQ.js";import"./LoadingSpinner-Cp0jDW5T.js";import"./Separator-CpyG2-QQ.js";import"./Message-hrhHm_Tz.js";import"./MessageSeparator-C9EaqawW.js";import"./NavigationGroup-gYW7EtWF.js";import"./Notification-Cb_wPwY7.js";import"./NotificationProvider-DMKJ6Z2r.js";import"./ProgressBar-BEYlfi9a.js";import"./Rating-Bth5rzY2.js";import"./Skeleton-Beogy4tJ.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
        <MarkdownEditor {...props} ref={editorRef}>
          <Label>Message</Label>
        </MarkdownEditor>
        <Button type="button" onClick={handleFocus}>
          Set focus
        </Button>
      </Section>;
  }
}`,...h.parameters?.docs?.source}}};const _r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,_r as __namedExportsOrder,Tr as default};
