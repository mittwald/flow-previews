import{j as r,r as f}from"./iframe-BrcQhcwR.js";import{M as o}from"./MarkdownEditor-Bau68SOM.js";import{L as R}from"./Label-eB0oKMGS.js";import{F as b}from"./FieldError-D24voWaJ.js";import{B as z}from"./Button-DdI6TSg5.js";import{S as x}from"./Section-BOZrahl-.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-Cdi0NMVp.js";import"./CodeBlock-CmdgpUkc.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CX-cmdRk.js";import"./IconWarning-MWZFtagw.js";import"./flowComponent-m6SyqnPg.js";import"./index-Del26Dy4.js";import"./index-CSUT2NCR.js";import"./remote-BHShYJ5P.js";import"./Tooltip-DRnnxW30.js";import"./utils-DM5Jp8EX.js";import"./OverlayArrow-DY7ECRqq.js";import"./useFocus-BKws8v7-.js";import"./ProgressBar-DhNSphWE.js";import"./Label-ChTBNZrK.js";import"./Hidden-D0_rVqY-.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-0hwKkY3Z.js";import"./context-DOSLHoOx.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DEM6_VkF.js";import"./useControlledState-DsUZezc6.js";import"./useFocusable-BcdgZhOs.js";import"./react-children-utilities-CETd4T3-.js";import"./Action-EPprNG1t.js";import"./context-C9I6Qco3.js";import"./useStatic-Cr39OxgC.js";import"./browser-BdJDgoMU.js";import"./getActionGroupSlot-Dt2slLBi.js";import"./dynamic-CAxQXs-G.js";import"./useLocalizedStringFormatter-hxpvTBNb.js";import"./Heading-DeF2rP0f.js";import"./Heading-D_8LxtK-.js";import"./RSPContexts-CLcTs2D_.js";import"./InlineCode-DgIGWy87.js";import"./Link-DW1OiTYF.js";import"./usePress-BBaWFJWg.js";import"./Separator-BXu9b-HV.js";import"./Separator-BpDC4shb.js";import"./CollectionBuilder-DHL6mUJ2.js";import"./Text-PyhJCmvh.js";import"./EmulatedBoldText-Bbt3btdp.js";import"./Text-CzkXk5bL.js";import"./TextArea-CzfXzb28.js";import"./TextFieldBase-Do10r9PH.js";import"./FieldDescription-8e-MGFTK.js";import"./useFieldComponent-CsbQ-7mY.js";import"./TextField-DAzAMmO8.js";import"./FieldError-BZvulriJ.js";import"./Form-DI5rGqIO.js";import"./Group-kTgIroHk.js";import"./Input-CFsccwbB.js";import"./useTextField-y15xLcpn.js";import"./useFormReset-BHDJFB5Q.js";import"./useFormValidation-CstoYpvO.js";import"./useControlledHostValueProps-B_1Yxsae.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BAa8Yse9.js";import"./AlertIcon-CzBRtVHG.js";import"./LoadingSpinner-C-WbSXYT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CztCXt43.js";import"./ContextMenuSection-BV3yleYZ.js";import"./Dialog-DAgI8QrG.js";import"./Collection-kTlo8aNF.js";import"./SelectionIndicator-Bi_ZzqWB.js";import"./SelectionManager-B-CgmQdR.js";import"./useEvent-D8AEfF0F.js";import"./useCollator-DSAWxNmx.js";import"./FocusScope-CxLgpb_M.js";import"./VisuallyHidden-CIPoghQB.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
