import{j as r,r as f}from"./iframe-BYq2oLvG.js";import{M as o}from"./MarkdownEditor-DNtqTTkd.js";import{L as R}from"./Label-xDxAxXdC.js";import{F as b}from"./FieldError-Cq2wz6X1.js";import{B as z}from"./Button-DnTJdD84.js";import{S as x}from"./Section-JjbD93jy.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-EagorR3L.js";import"./CodeBlock-DaMFV7cr.js";import"./clsx-B-dksMZM.js";import"./CopyButton-3BVHMG3x.js";import"./IconWarning-l8NPf1u4.js";import"./flowComponent-DHneW8T1.js";import"./index-pVjII2WU.js";import"./index-BCX3_YU5.js";import"./remote-SGC31yDV.js";import"./Tooltip-CL4u7bC1.js";import"./utils-Da-bhZeG.js";import"./OverlayArrow-CfRyqpgH.js";import"./useFocus-BosBzJqA.js";import"./ProgressBar-BYjSEmea.js";import"./Label-onG8m68o.js";import"./Hidden-BEATyBSB.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BBF67Bfk.js";import"./context-WfyLsYOo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DoNt3T3i.js";import"./useControlledState-B-JkoIYX.js";import"./useFocusable-eOfLyRoH.js";import"./react-children-utilities-Cmc3EC1f.js";import"./ActionBatch-Bd-ykVKX.js";import"./context-BgaPAiG2.js";import"./useStatic-CVBRAdvz.js";import"./browser-CRRI-wfh.js";import"./getActionGroupSlot-BbvszDVH.js";import"./dynamic-bmDFV0NR.js";import"./useLocalizedStringFormatter-DFbS966t.js";import"./Heading-CpBZdPdX.js";import"./Heading-CuMsOcSF.js";import"./RSPContexts-DDzq82Ri.js";import"./InlineCode-DUdkF4V_.js";import"./Link-TWxwANrT.js";import"./usePress-CABccGP2.js";import"./Separator-BZyQfv0F.js";import"./Separator-D5y-ao9w.js";import"./CollectionBuilder-D5hV5BBU.js";import"./Text-Df3o0vPg.js";import"./EmulatedBoldText-2hwPnQKV.js";import"./Text-BsD4qVoX.js";import"./TextArea-BfvfJoG3.js";import"./useFieldComponent-C42pk4aC.js";import"./useControlledHostValueProps-Bfvj7P7T.js";import"./FieldDescription-rCK7g6Ew.js";import"./TextField-CTpVzkYd.js";import"./FieldError-3pauqY5q.js";import"./Form-BjhhXbaP.js";import"./Group-D2o0YYLE.js";import"./Input-2WqTMUAU.js";import"./useTextField-DkyrAVou.js";import"./useFormReset-COvJ3vzl.js";import"./useFormValidation-DIPf7gSr.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BLnni9j6.js";import"./AlertIcon-DHHmiMC7.js";import"./LoadingSpinner-DIcYbI07.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Bk2CF5qa.js";import"./ContextMenuSection-7fn1Gt6w.js";import"./Dialog-DIAje18X.js";import"./Collection-DGuLDpP3.js";import"./SelectionIndicator-DxCQPmpp.js";import"./SelectionManager-DNg-4UKk.js";import"./useEvent-BYfYEsDL.js";import"./useCollator-BntQ465Q.js";import"./FocusScope-CUVzpEcF.js";import"./VisuallyHidden-4k4K_3kv.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
