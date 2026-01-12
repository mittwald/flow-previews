import{j as r,r as f}from"./iframe-DpNCYkDX.js";import{M as o}from"./MarkdownEditor-O4hwzCNr.js";import{L as R}from"./Label-DxyEdRqz.js";import{F as b}from"./FieldError-CLVEK_uH.js";import{B as z}from"./Button-CB8TQqfw.js";import{S as x}from"./Section-Xx985Qwf.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-TDgbL4jU.js";import"./CodeBlock-aWkta7Yt.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DPnNb6Gx.js";import"./IconWarning-CcmUiij-.js";import"./flowComponent-DsLeaaVl.js";import"./index-C38UUpab.js";import"./index-lXFaKghW.js";import"./remote-FHZXAXl3.js";import"./Tooltip-CTUOWqPY.js";import"./utils-YaT_C2bO.js";import"./OverlayArrow-DaAbsuct.js";import"./useFocus-CLy8_GQ0.js";import"./ProgressBar-BiLC8jqV.js";import"./Label-DRXP2wjN.js";import"./Hidden-AzE2Q4X1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DtioSroH.js";import"./context-Df7wrknH.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CFzFCELG.js";import"./useFocusable-BsZoANuz.js";import"./useFocusRing-DWz_LOyJ.js";import"./react-children-utilities-Cso8Q2ZJ.js";import"./Action-CnYZaomm.js";import"./context-CUs0iBzd.js";import"./useStatic-C-pVfuV7.js";import"./browser-BfCz5g6M.js";import"./getActionGroupSlot-Uc-3WiS8.js";import"./dynamic-DOXkjdco.js";import"./useLocalizedStringFormatter-CJK7tFkI.js";import"./Heading-CdQ6Kdnh.js";import"./Heading-Cba33pi1.js";import"./RSPContexts-_XCAh6rU.js";import"./InlineCode-De8xsHIO.js";import"./Link-Cz3IrAwQ.js";import"./usePress-OMCV4DY8.js";import"./Separator-Cf0C9sSO.js";import"./Separator-DkK11TMO.js";import"./CollectionBuilder-XTUTawTi.js";import"./Text-Bp6u83O8.js";import"./EmulatedBoldText-DU1S0mM2.js";import"./Text-B4MgbG6f.js";import"./TextArea-CjnoTsrF.js";import"./TextFieldBase-CfdMUDGG.js";import"./FieldDescription-CTMXceLM.js";import"./useFieldComponent-CtyBuaGz.js";import"./TextField-KvvlNML-.js";import"./FieldError-DsNqYoam.js";import"./Form-Ce-l7r4o.js";import"./Group-3R2C1nbx.js";import"./Input-BuBJ2CWK.js";import"./useTextField-DCYKGErD.js";import"./useFormReset-BsRaFjct.js";import"./useFormValidation-Db_N1-Xt.js";import"./useControlledHostValueProps-BIankb3Z.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DNWtIllY.js";import"./AlertIcon-CnmOZB_U.js";import"./LoadingSpinner-mT2tjpr6.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DAbgtjDL.js";import"./ContextMenuSection-BWIiCJCm.js";import"./Dialog-DtZU9YT9.js";import"./Collection-B0Nu23OM.js";import"./SelectionIndicator-qbtLTFTY.js";import"./SelectionManager-u_c2A7HJ.js";import"./useEvent-D64C7zgK.js";import"./useCollator-BChcYNiy.js";import"./FocusScope-DPz7ONOW.js";import"./VisuallyHidden-BhiVW_d3.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
