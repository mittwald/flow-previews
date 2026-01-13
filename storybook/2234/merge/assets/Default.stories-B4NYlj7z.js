import{j as r,r as f}from"./iframe-y-Qy_Rwm.js";import{M as o}from"./MarkdownEditor-CIpGnvjO.js";import{L as R}from"./Label-DwZ1nY2p.js";import{F as b}from"./FieldError-CHdxAWDK.js";import{B as z}from"./Button-BD4RfixQ.js";import{S as x}from"./Section-C7Uhv2VD.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CE9I8KnE.js";import"./CodeBlock-D4otrjMw.js";import"./clsx-B-dksMZM.js";import"./CopyButton-TUfiADtT.js";import"./IconWarning-CSZkcfVi.js";import"./flowComponent-ChH3J7dR.js";import"./index-CyDBTnD6.js";import"./index-DHyBIfcz.js";import"./remote-DXSfp6Hy.js";import"./Tooltip-DEu4vk2T.js";import"./utils-Ek_OXClQ.js";import"./OverlayArrow-BfgbGjhP.js";import"./useFocus-L_xbSTvo.js";import"./ProgressBar-Bi5AZMSy.js";import"./Label-B71VVe9p.js";import"./Hidden-D2H3G8L4.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-oIpNFQLF.js";import"./context-ukqkFony.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BivKNDQQ.js";import"./useFocusable-BPLcErJ9.js";import"./useFocusRing-TFugmXCf.js";import"./react-children-utilities-BzC9hhGT.js";import"./Action-DCkGWMlj.js";import"./context-CYZaYtgr.js";import"./useStatic-6QMcNdFE.js";import"./browser-BkGSrLgH.js";import"./getActionGroupSlot-BtmlVZy9.js";import"./dynamic-DOzqWg4O.js";import"./useLocalizedStringFormatter-BuF0P38W.js";import"./Heading-BvcdH5AE.js";import"./Heading-DBwZPojJ.js";import"./RSPContexts-D6kJ8Blw.js";import"./InlineCode-CmbxUHdH.js";import"./Link-BM40k55f.js";import"./usePress-ginTfsZX.js";import"./Separator-C7APhlPq.js";import"./Separator-BVG5NTNP.js";import"./CollectionBuilder-DNjjGXjQ.js";import"./Text-Dc6HCiIC.js";import"./EmulatedBoldText-BWRuiDih.js";import"./Text-BUjonAbB.js";import"./TextArea-Dlm0efJW.js";import"./TextFieldBase-C71d5QJL.js";import"./FieldDescription-CpWKNI_h.js";import"./useFieldComponent-BPtwnKvp.js";import"./TextField-CC-2iDxd.js";import"./FieldError-B0Ilb29D.js";import"./Form-DvQjUgdb.js";import"./Group-_NOX1hM3.js";import"./Input-YVfVzY4s.js";import"./useTextField-DGsPnemp.js";import"./useFormReset-DmoJehYX.js";import"./useFormValidation-49dCeNRi.js";import"./useControlledHostValueProps-Br1cey4W.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CnTSLXpj.js";import"./AlertIcon-B-ySDH61.js";import"./LoadingSpinner-CaEX00sr.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CDSdTdYv.js";import"./ContextMenuSection-UUsl5yAi.js";import"./Dialog-yt0PwtsU.js";import"./Collection-wMGDOUBU.js";import"./SelectionIndicator-Ccu7nnnp.js";import"./SelectionManager-DlKr1lyz.js";import"./useEvent-D3WWLcmI.js";import"./useCollator-QROY5xcX.js";import"./FocusScope-GXsPqTvD.js";import"./VisuallyHidden-uuI_aPdk.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
