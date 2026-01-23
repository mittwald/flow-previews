import{j as r,r as f}from"./iframe-iY_Mn_oy.js";import{M as o}from"./MarkdownEditor-BBE3Wc0t.js";import{L as R}from"./Label-3EuxSz5j.js";import{F as b}from"./FieldError-rrdHjYdT.js";import{B as z}from"./Button-BXdn408E.js";import{S as x}from"./Section-CuJxl25L.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BZ_WERLa.js";import"./CodeBlock-Cms56LjC.js";import"./clsx-B-dksMZM.js";import"./CopyButton-04bNBKIV.js";import"./IconWarning-B803z1sh.js";import"./flowComponent-DM--TRa4.js";import"./index-BDAsCxdA.js";import"./index-IKthRYIx.js";import"./remote-CIrN4__o.js";import"./Tooltip-DiQGUJKk.js";import"./utils-C-pMCGM-.js";import"./OverlayArrow-KAH5W0sM.js";import"./useFocus-Nxno6ZgW.js";import"./ProgressBar-DKU-k64e.js";import"./Label-DWRUfm9N.js";import"./Hidden-BMoxskLs.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-8EVB-03H.js";import"./context-DIbVk5_z.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DUH-ni6I.js";import"./useFocusable-Bi19l3La.js";import"./useFocusRing-BNNZSKMh.js";import"./react-children-utilities-CMUhtctB.js";import"./Action-iMWR4bsW.js";import"./context-AuWKQf6d.js";import"./useStatic-BNEy2A13.js";import"./browser-DK9hE6UN.js";import"./getActionGroupSlot-DnzDvT0Q.js";import"./dynamic-CDOrKiJc.js";import"./useLocalizedStringFormatter-DmQ_f8mX.js";import"./Heading-GKx2aQmx.js";import"./Heading-BsXYKZvI.js";import"./RSPContexts-CRnPLFal.js";import"./InlineCode-DkVq55gl.js";import"./Link-DReQH9zY.js";import"./usePress-B5dXj1sU.js";import"./Separator-5j51brOL.js";import"./Separator-DvCWPy9d.js";import"./CollectionBuilder-CBi7m5Jq.js";import"./Text-C2ZCo6gl.js";import"./EmulatedBoldText-CHIJjbeg.js";import"./Text-CktBEW1F.js";import"./TextArea-Wz2au5Od.js";import"./TextFieldBase-BOaLW-DS.js";import"./FieldDescription-DHPoAUPt.js";import"./useFieldComponent-Cxjop7r-.js";import"./TextField-I3iQ5THw.js";import"./FieldError-BP_EVNQV.js";import"./Form-2TpMp3Y3.js";import"./Group-CDmjKrYo.js";import"./Input-B3denzrL.js";import"./useTextField-BqkIOSVN.js";import"./useFormReset-DJj-QXR5.js";import"./useFormValidation-B6OmY3vR.js";import"./useControlledHostValueProps-7A2CJ7V9.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BLXtcQ-I.js";import"./AlertIcon-Dw605mNU.js";import"./LoadingSpinner-C14k5CPB.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BELa7hv8.js";import"./ContextMenuSection-DufqnfrN.js";import"./Dialog-BSCAVunC.js";import"./Collection-p0j0j4rV.js";import"./SelectionIndicator-C9Y7msNP.js";import"./SelectionManager-jr_LZpLG.js";import"./useEvent-BHEixncs.js";import"./useCollator-Daexx-65.js";import"./FocusScope-Crvk_gLu.js";import"./VisuallyHidden-DEFkQEyo.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Pr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Pr as __namedExportsOrder,Nr as default};
