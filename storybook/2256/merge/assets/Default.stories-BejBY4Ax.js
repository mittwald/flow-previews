import{j as r,r as f}from"./iframe-DjKJp4LH.js";import{M as o}from"./MarkdownEditor-u6w_94p9.js";import{L as R}from"./Label-CIoe3s2x.js";import{F as b}from"./FieldError-DkeOn6Iq.js";import{B as z}from"./Button-BDEZ1Pgg.js";import{S as x}from"./Section-CJ66IskI.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Ctp_Nvt7.js";import"./CodeBlock-Ccx-1fN7.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C_3_7eAz.js";import"./IconWarning-6PZXNPQv.js";import"./flowComponent-D6qVG3rB.js";import"./index-DwtlgCJu.js";import"./index-PXjpOTa6.js";import"./remote-X6dXUxim.js";import"./Tooltip-CDAIUXPe.js";import"./utils-DyC1AhIW.js";import"./OverlayArrow-NBjjGcXc.js";import"./useFocus-DfQL19Qh.js";import"./ProgressBar-Bp6bQOCH.js";import"./Label-7z6Dpe4l.js";import"./Hidden-Cj7p_Cun.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel--MzsjFNv.js";import"./context-CaWPG6rd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7AKSDvs.js";import"./useFocusable-Cypk5WsB.js";import"./useFocusRing-BGVhnkul.js";import"./react-children-utilities-C3_V-br9.js";import"./Action-CS8Seurr.js";import"./context-BJ5dxW4L.js";import"./useStatic-DSbbnRPw.js";import"./browser-DP-AFXYC.js";import"./getActionGroupSlot-BcFDPTef.js";import"./dynamic-Cwgd_SYw.js";import"./useLocalizedStringFormatter-Dnneor8b.js";import"./Heading-BlHRWoOy.js";import"./Heading-YfRwYxPu.js";import"./RSPContexts-BW0AZj1S.js";import"./InlineCode-DekL6Mlz.js";import"./Link-B_-7uhNh.js";import"./usePress-Cba7eTZL.js";import"./Separator-C6tf6S93.js";import"./Separator-BnnFI041.js";import"./CollectionBuilder-BUtswklx.js";import"./Text-DIX_PQ8a.js";import"./EmulatedBoldText-CMQt-Xk-.js";import"./Text-DDR-J2dK.js";import"./TextArea-CkhSHJ5M.js";import"./TextFieldBase-TeuDrDVN.js";import"./FieldDescription-B7UVP7RU.js";import"./useFieldComponent-7yFtRUym.js";import"./TextField-DvgqVBTF.js";import"./FieldError-CRskrSrV.js";import"./Form-DzoAzIf2.js";import"./Group-BBLSi45B.js";import"./Input-CKW8JUfL.js";import"./useTextField-B9Zq3G8e.js";import"./useFormReset-BtBZQ9D7.js";import"./useFormValidation-D-rCh5i6.js";import"./useControlledHostValueProps-DwkrQ0Ha.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-B4kskhvn.js";import"./AlertIcon-DJ6AhYBh.js";import"./LoadingSpinner-pyPoMdb7.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DheLTGmH.js";import"./ContextMenuSection-D6Byc7PS.js";import"./Dialog-B6ze-qTj.js";import"./Collection-DCkcEv4P.js";import"./SelectionIndicator-B0FAwcHG.js";import"./SelectionManager-BjFMgKhL.js";import"./useEvent-D3fHv2-i.js";import"./useCollator-C3dV1__C.js";import"./FocusScope-5Nl-wNMA.js";import"./VisuallyHidden-BM-dzb4f.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
