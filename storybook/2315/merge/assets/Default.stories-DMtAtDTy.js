import{j as r,r as f}from"./iframe-DiUxw81Q.js";import{M as o}from"./MarkdownEditor-DycPVEZq.js";import{L as R}from"./Label-DpHnEhHE.js";import{F as b}from"./FieldError-DH3i7Cba.js";import{B as z}from"./Button-gnRq8NvL.js";import{S as x}from"./Section-DUwGPO-R.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-C8wFcpyR.js";import"./CodeBlock-CJObudLK.js";import"./clsx-B-dksMZM.js";import"./CopyButton-ria9MyDZ.js";import"./IconWarning-DJftz4M-.js";import"./flowComponent-Doi79f5D.js";import"./index-DoB8i5PX.js";import"./index-2ROVwQvu.js";import"./remote-dRe2-fx5.js";import"./Tooltip-Bz1XyPlR.js";import"./utils-BhADjK-H.js";import"./OverlayArrow-BBITTnz5.js";import"./useFocus-DSwjHrh5.js";import"./ProgressBar-HXLQU2Vm.js";import"./Label-Dt69EWuh.js";import"./Hidden-YWjhfZDI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-yn1VwYEU.js";import"./context-si8TSn1j.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BpbrWv_K.js";import"./useControlledState-DDLUXLOw.js";import"./useFocusable-bbwyacvB.js";import"./react-children-utilities-CAw8z2qO.js";import"./Action-D_TEMwel.js";import"./context-C7B1j1st.js";import"./useStatic-BoyD6q7D.js";import"./browser-DhblGL2Q.js";import"./getActionGroupSlot-DtA40Fi-.js";import"./dynamic-Bvqmautb.js";import"./useLocalizedStringFormatter-CjhcHHQc.js";import"./Heading-CaLCe_nK.js";import"./Heading-BfJy_wN2.js";import"./RSPContexts-D4TaMXlQ.js";import"./InlineCode-BsksdhT-.js";import"./Link-HMWkYJE0.js";import"./usePress-I-WC2YFt.js";import"./Separator-Bs3_iwD5.js";import"./Separator-CQ3T4lOo.js";import"./CollectionBuilder-CvFvZJ2s.js";import"./Text-CMit6jNZ.js";import"./EmulatedBoldText-WmP9Wm83.js";import"./Text-CUd3ZjBr.js";import"./TextArea-BPTSRhT6.js";import"./useFieldComponent-BFiXxBQU.js";import"./useControlledHostValueProps-D5fxzAXf.js";import"./FieldDescription-CByPgqro.js";import"./TextField-BVETUbDW.js";import"./FieldError-BKME6Hw5.js";import"./Form-kW4DkkVS.js";import"./Group-DEqw8J9L.js";import"./Input-lzxTVruz.js";import"./useTextField-CJ6J-TLI.js";import"./useFormReset-Cz-LaBzR.js";import"./useFormValidation-CsqhaN7Y.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-3B66Ly-F.js";import"./AlertIcon-C_aBYmlN.js";import"./LoadingSpinner-Rpl9g6nT.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-JQtyulyF.js";import"./ContextMenuSection-CCmic__u.js";import"./Dialog-CJTGGTvx.js";import"./Collection-BtPubrtW.js";import"./SelectionIndicator-BsyJ81fY.js";import"./SelectionManager-BOTG9Axa.js";import"./useEvent-D_adZsOG.js";import"./useCollator-uFjTzBPf.js";import"./FocusScope-moHWWkwF.js";import"./VisuallyHidden-Bb1j3rfU.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
