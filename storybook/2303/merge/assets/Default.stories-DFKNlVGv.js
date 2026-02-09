import{j as r,r as f}from"./iframe-BTP_Z9Sf.js";import{M as o}from"./MarkdownEditor-Cb78_z89.js";import{L as R}from"./Label-Cu7NRaqa.js";import{F as b}from"./FieldError-DnUQcxCL.js";import{B as z}from"./Button-er0RkDrE.js";import{S as x}from"./Section-Bql58_C6.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DWqneFSS.js";import"./CodeBlock-BDZgjtKx.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C0I8s8Vs.js";import"./IconWarning-CwZb39At.js";import"./flowComponent-DvBALJVI.js";import"./index-z_6Cto56.js";import"./index-E_qagHnK.js";import"./remote-BmAp8UvO.js";import"./Tooltip-BLtZNxw3.js";import"./utils-DP1LA6WE.js";import"./OverlayArrow-DzMljQ2A.js";import"./useFocus-BU1lOliM.js";import"./ProgressBar-CBYSqGBG.js";import"./Label-PTTOxDPw.js";import"./Hidden-7cYXeHtZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Cpmi3JfU.js";import"./context-BBaC2IfM.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CQvdF7rp.js";import"./useControlledState-B5h2rUtG.js";import"./useFocusable-Hlf8Yc9h.js";import"./react-children-utilities-DCagrUJJ.js";import"./Action-CBjIM5JV.js";import"./context-BwxZaZwM.js";import"./useStatic-kc5QKD7I.js";import"./browser-eyJ8FPIK.js";import"./getActionGroupSlot-V7kcySO7.js";import"./dynamic-LcJrXyvC.js";import"./useLocalizedStringFormatter-DvZZD1YW.js";import"./Heading-tBPre37B.js";import"./Heading-CcadeVc2.js";import"./RSPContexts-Bn1hDyBd.js";import"./InlineCode-DZAdpLax.js";import"./Link-C9fmLDrA.js";import"./usePress-BnZLj0Nc.js";import"./Separator-CP9PIYgv.js";import"./Separator-DTcX24DQ.js";import"./CollectionBuilder-By7qHrZF.js";import"./Text-Cq5MQ8wu.js";import"./EmulatedBoldText-BkuV9i5t.js";import"./Text-CZ1YR4oj.js";import"./TextArea-DPff8cil.js";import"./useFieldComponent-Da-vFXDP.js";import"./useControlledHostValueProps-C_qKEx-0.js";import"./FieldDescription-DPC9D0sU.js";import"./TextField-Bv9Ux1RZ.js";import"./FieldError-BvNBTK6b.js";import"./Form-BB65cxFE.js";import"./Group-D6HmZmNZ.js";import"./Input-Cgr_O3PE.js";import"./useTextField-D5-cYn1Z.js";import"./useFormReset-Bo1Ib9da.js";import"./useFormValidation-HNZmieSP.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CSpjF2dw.js";import"./AlertIcon-BLTDYNdz.js";import"./LoadingSpinner-Cv-igvht.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DgJw7YNb.js";import"./ContextMenuSection-De_H5Wjl.js";import"./Dialog-DITwbnCq.js";import"./Collection-DSvrrKnp.js";import"./SelectionIndicator-Dze6faSJ.js";import"./SelectionManager-Cw7zB5E7.js";import"./useEvent-C591_3g7.js";import"./useCollator-BHL0tWyU.js";import"./FocusScope-B2nLTMyD.js";import"./VisuallyHidden-BWM4WxkJ.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const Nr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Nr as __namedExportsOrder,Kr as default};
