import{j as r,r as f}from"./iframe-bJ_6fidF.js";import{M as o}from"./MarkdownEditor-DZ5WjYuD.js";import{L as R}from"./Label-jHNg7W3d.js";import{F as b}from"./FieldError-D9NzXF8I.js";import{B as z}from"./Button-BnsDuM8z.js";import{S as x}from"./Section-BIKV3qXu.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DzvyprFR.js";import"./CodeBlock-Dr8V6Qs_.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bfg0R5ht.js";import"./IconWarning-BRVy1IKm.js";import"./flowComponent-Dc3IE02E.js";import"./index-BiU4KtXW.js";import"./index-DZS8fxXA.js";import"./remote-BGnMaeOw.js";import"./Tooltip-Dgd1avx8.js";import"./utils-2JACcOpK.js";import"./OverlayArrow-BzF-2SH6.js";import"./useFocus-DCEJi5pX.js";import"./ProgressBar-B339qPNf.js";import"./Label-ITTSHdKZ.js";import"./Hidden-D-D3cT6t.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DgCjbnqL.js";import"./context-BRobVGip.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DiZTTo94.js";import"./useFocusable-s9iArTw-.js";import"./useFocusRing-BfXNN7l5.js";import"./react-children-utilities-pHPFqe5c.js";import"./Action-BNfya_PE.js";import"./context-CiNdmr3l.js";import"./useStatic-BZPvcAPs.js";import"./browser-CDYbiXXK.js";import"./getActionGroupSlot-B0EdTSi2.js";import"./dynamic-B98QrFwh.js";import"./useLocalizedStringFormatter-DVRf4Nef.js";import"./Heading-DKGadcRU.js";import"./Heading-Bbyv6ScP.js";import"./RSPContexts-Du7Xg6Jz.js";import"./InlineCode-CpHJscMZ.js";import"./Link-Dn5sw_YH.js";import"./usePress-DUWDHSym.js";import"./Separator-sKO4ytK0.js";import"./Separator-DIVM-WQV.js";import"./CollectionBuilder-CsK04tEC.js";import"./Text-38_GgC7q.js";import"./EmulatedBoldText-0Pd-4dNn.js";import"./Text-BK6SVPNL.js";import"./TextArea-0qzT2LgT.js";import"./TextFieldBase-DP_yQhHd.js";import"./FieldDescription-CvkvDToJ.js";import"./useFieldComponent-uPh6Au6A.js";import"./TextField-D6yUSkG5.js";import"./FieldError-BXkLcNaX.js";import"./Form-u1KpLyfA.js";import"./Group-DIFUJtkh.js";import"./Input-Cc8ouKNt.js";import"./useTextField-BE6Uy-6e.js";import"./useFormReset-nMFTazsC.js";import"./useFormValidation-CfG5OslG.js";import"./useControlledHostValueProps-TNG0Fwfb.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-Da58qKyF.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CFn0JrTH.js";import"./ContextMenuSection-CO0mnEOv.js";import"./Dialog-DXm38-Rd.js";import"./Collection-BtgF6RLC.js";import"./SelectionIndicator-smcarjhT.js";import"./SelectionManager-oHLM6Xvs.js";import"./useEvent-CVxS1Lwc.js";import"./useCollator-BcEDrZTh.js";import"./FocusScope-C6rup_Tq.js";import"./VisuallyHidden-BLAg7qtf.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
