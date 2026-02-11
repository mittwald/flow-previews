import{j as r,r as f}from"./iframe-Cq8OhOqi.js";import{M as o}from"./MarkdownEditor-DJ44KASN.js";import{L as R}from"./Label-D-4zWGkt.js";import{F as b}from"./FieldError-2IpGOPbh.js";import{B as z}from"./Button-BU-3gGXz.js";import{S as x}from"./Section-CsWsO61m.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DmK1cTnb.js";import"./CodeBlock-C7so5WC-.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BIeM_mhj.js";import"./IconWarning-D6WB6H32.js";import"./flowComponent-BPlAJrQX.js";import"./index-CDojQULy.js";import"./index-CtMt1etx.js";import"./remote-D-3bgxwF.js";import"./Tooltip-CaVr5Y12.js";import"./utils-Bubk6yJw.js";import"./OverlayArrow-CUm_HcTA.js";import"./useFocus-hSjeZcP9.js";import"./ProgressBar-pI249SR8.js";import"./Label-BIWw7tEO.js";import"./Hidden-BxQeKZxe.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-Ddb4-Ews.js";import"./context-EUTE_30t.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C66f8wZh.js";import"./useControlledState-DRmDoHXV.js";import"./useFocusable-Cka2f_Hf.js";import"./react-children-utilities-B642l1aO.js";import"./Action-CjFX3pKp.js";import"./context-DR72ScyD.js";import"./useStatic-Dv08VHAH.js";import"./browser-D1jWek88.js";import"./getActionGroupSlot-E0a2MdOz.js";import"./dynamic-fC-Lgr30.js";import"./useLocalizedStringFormatter-B4BWJZRT.js";import"./Heading-Di8lkzs2.js";import"./Heading-CPXM0mEb.js";import"./RSPContexts-CKy-IICl.js";import"./InlineCode-BX4RZpWo.js";import"./Link-Dj4WQhqO.js";import"./usePress-ChoIOqc4.js";import"./Separator-of9u5BMv.js";import"./Separator-PjONMOza.js";import"./CollectionBuilder-D61kQYAv.js";import"./Text-CeV8P7pg.js";import"./EmulatedBoldText-CaDCAcie.js";import"./Text-BrptySpj.js";import"./TextArea-ClzBr29m.js";import"./useFieldComponent-BYb5VnRy.js";import"./useControlledHostValueProps-CZhQ_qJq.js";import"./FieldDescription-CU8MDP5d.js";import"./TextField-DBFGOmkp.js";import"./FieldError-BGnsbaLE.js";import"./Form-B1CYZolU.js";import"./Group-CJEr304M.js";import"./Input-DDTw6Vbr.js";import"./useTextField-B9xagunm.js";import"./useFormReset-B4zM24P8.js";import"./useFormValidation-DYnqTuxD.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-aZpP8wGh.js";import"./AlertIcon-4JwX6npd.js";import"./LoadingSpinner-DSK_LMeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-RahnnKar.js";import"./ContextMenuSection-C22Hcd-O.js";import"./Dialog-BglVjZuh.js";import"./Collection-BDonS7tS.js";import"./SelectionIndicator-LHAUO8nn.js";import"./SelectionManager-CJM9qnyd.js";import"./useEvent-BLNYXLIo.js";import"./useCollator-BMatrljN.js";import"./FocusScope-B5Hy3UxH.js";import"./VisuallyHidden-CN_7F8uI.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
