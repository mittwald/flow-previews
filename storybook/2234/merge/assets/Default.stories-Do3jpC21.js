import{j as r,r as f}from"./iframe-DZ4teeW0.js";import{M as o}from"./MarkdownEditor-Bx9NJlLH.js";import{L as R}from"./Label-DoWn6F4v.js";import{F as b}from"./FieldError-AZ-rkViQ.js";import{B as z}from"./Button-DKoFnNBZ.js";import{S as x}from"./Section-239igX5r.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-RLY0hfos.js";import"./CodeBlock-DKKl5Hbn.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DN_HW3zP.js";import"./IconWarning-BMXzPSbA.js";import"./flowComponent-CieJlEUq.js";import"./index-Dth1hoGd.js";import"./index-hJtfnrYv.js";import"./remote-C7mA51oY.js";import"./Tooltip-BF9uKYtJ.js";import"./utils-CmR_RyV0.js";import"./OverlayArrow-DMnQ82Lw.js";import"./useFocus-DPzONbd_.js";import"./ProgressBar-qebYfenN.js";import"./Label-DqsFtup3.js";import"./Hidden-D1rcdGtX.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CN_YQU3T.js";import"./context-CZC3VL3b.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CE05dG3o.js";import"./useFocusable-V-w09cqm.js";import"./useFocusRing-Bi_KX66p.js";import"./react-children-utilities-BZnXtb18.js";import"./Action-IUgUGwCY.js";import"./context-CSe622gL.js";import"./useStatic-C2g0a5Fu.js";import"./browser-BOIGtlkn.js";import"./getActionGroupSlot-H_zTh0GS.js";import"./dynamic-DLpaDBxN.js";import"./useLocalizedStringFormatter-wvOzWyd2.js";import"./Heading-DmKF-kzC.js";import"./Heading-OLDiOTzf.js";import"./RSPContexts-BvqxEhTE.js";import"./InlineCode-yUYEp9BP.js";import"./Link-BGXzo5UM.js";import"./usePress-DM-2A3ZD.js";import"./Separator-CiNDnKrS.js";import"./Separator-Dh-vjBlE.js";import"./CollectionBuilder-DNyI9Nan.js";import"./Text-C4YBtGrU.js";import"./EmulatedBoldText-D386c9ln.js";import"./Text-BkVlga5W.js";import"./TextArea-DJgAI84m.js";import"./TextFieldBase-G_iOTL3r.js";import"./FieldDescription-wBHtE-uB.js";import"./useFieldComponent-D07Wu5hH.js";import"./TextField-DVn_L58j.js";import"./FieldError-DkoCPEDN.js";import"./Form-DzpbW5Q4.js";import"./Group-CcFwVgnp.js";import"./Input-D0qY3wir.js";import"./useTextField-BGWNueLQ.js";import"./useFormReset-CHb94_Ie.js";import"./useFormValidation-DQHMrpfA.js";import"./useControlledHostValueProps-uUZrCOOz.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-Dur7DX9B.js";import"./AlertIcon-Dng1V2P2.js";import"./LoadingSpinner-DJRFuNH9.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BNevv18m.js";import"./ContextMenuSection-NaF-svH4.js";import"./Dialog-mp_BsC5B.js";import"./Collection-w_out5sE.js";import"./SelectionIndicator-C2FrsSd1.js";import"./SelectionManager-W-Kl84XM.js";import"./useEvent-Rvr_SgMv.js";import"./useCollator-DxlaTcxe.js";import"./FocusScope-BJdWB0PZ.js";import"./VisuallyHidden-DG5gzPUr.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
