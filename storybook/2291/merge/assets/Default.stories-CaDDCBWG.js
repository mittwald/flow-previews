import{j as r,r as f}from"./iframe-BIoFjWpr.js";import{M as o}from"./MarkdownEditor-HOp_prnx.js";import{L as R}from"./Label-D-wfWBos.js";import{F as b}from"./FieldError-CY5Rdgwt.js";import{B as z}from"./Button-60lZfz3H.js";import{S as x}from"./Section-DckT0YJI.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-4P_gvtIl.js";import"./CodeBlock-DK7GFPGE.js";import"./clsx-B-dksMZM.js";import"./CopyButton-JPn5ytW5.js";import"./IconWarning-EC1k16Yv.js";import"./flowComponent-scX312by.js";import"./index-BNUHznNp.js";import"./index-h2cI_GQ2.js";import"./remote-CdlQwHLV.js";import"./Tooltip-C9gBBqKv.js";import"./utils-DZ7CVsEQ.js";import"./OverlayArrow-BK2hFoQS.js";import"./useFocus-CQPopARV.js";import"./ProgressBar-gq9TT67v.js";import"./Label-CY_Zdhv-.js";import"./Hidden-JTKX8Fqm.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CIJOcLbZ.js";import"./context-CeBhVpDW.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-C05eNqGk.js";import"./useControlledState-A9PECuda.js";import"./useFocusable-CwNae-cD.js";import"./react-children-utilities-DvI8SjR5.js";import"./Action-CpJIOnVf.js";import"./context-Bujl8L45.js";import"./useStatic-BOUdEr4J.js";import"./browser-BAGCYS_p.js";import"./getActionGroupSlot-NgI5MKDv.js";import"./dynamic-BzebB2lX.js";import"./useLocalizedStringFormatter-BdL-N6vb.js";import"./Heading-CdczJAyy.js";import"./Heading-DvZsP83m.js";import"./RSPContexts-TtAa_5CI.js";import"./InlineCode-Dm-kWWcs.js";import"./Link-BGJm99bT.js";import"./usePress-Uox4pFjd.js";import"./Separator-vzPlSg17.js";import"./Separator-CBKzJJ-r.js";import"./CollectionBuilder-DVbi1VxZ.js";import"./Text-Dw86EjFX.js";import"./EmulatedBoldText-Cp_-MpAq.js";import"./Text-DporVAh2.js";import"./TextArea-DNBjUSuf.js";import"./useFieldComponent-DpF862rt.js";import"./useControlledHostValueProps-DbQDLAPx.js";import"./FieldDescription-CmT-44YL.js";import"./TextField-D2l0jW9W.js";import"./FieldError-3U-LgGLS.js";import"./Form-BlXCmAsm.js";import"./Group-kc9AGw0Y.js";import"./Input-D2aCw11E.js";import"./useTextField-BXYStOBz.js";import"./useFormReset-DTiYdK4X.js";import"./useFormValidation-5Xewoqko.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CqfZMgA0.js";import"./AlertIcon-CufExgwJ.js";import"./LoadingSpinner-B_0T51TC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-9bxiqwiQ.js";import"./ContextMenuSection-D04Tf7Yh.js";import"./Dialog-khxuiED6.js";import"./Collection-aRoAI_rd.js";import"./SelectionIndicator-DDosGdOa.js";import"./SelectionManager-CEROFblv.js";import"./useEvent-GmwJ1EXB.js";import"./useCollator-2eiQlCLN.js";import"./FocusScope-DZU3T--c.js";import"./VisuallyHidden-iLNm3MD9.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
