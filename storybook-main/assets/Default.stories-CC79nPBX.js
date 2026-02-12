import{j as r,r as f}from"./iframe-DeaTJDua.js";import{M as o}from"./MarkdownEditor-BRj7_VJS.js";import{L as R}from"./Label-DJdPs_mv.js";import{F as b}from"./FieldError-1N6EvFt7.js";import{B as z}from"./Button-Cbxy7DVV.js";import{S as x}from"./Section-BH_SD1YF.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DBZ5BnaL.js";import"./CodeBlock-nNYV-SP3.js";import"./clsx-B-dksMZM.js";import"./CopyButton-p384BHtI.js";import"./IconWarning-Bnohnd1u.js";import"./flowComponent-De56C_b5.js";import"./index-6wTRmFp1.js";import"./index-BmNXFkrE.js";import"./remote-4WWdz0S_.js";import"./Tooltip-C4DC67uQ.js";import"./utils-DAn_19Le.js";import"./OverlayArrow-seoLwAns.js";import"./useFocus-DwX8c8hl.js";import"./ProgressBar-GULdM67U.js";import"./Label-Cq9BvoI9.js";import"./Hidden-DSflBmUF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-C4fGorSC.js";import"./context-DpHy2B7Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CR3AbbfB.js";import"./useControlledState-CvKG4MPs.js";import"./useFocusable-DXFTvAH_.js";import"./react-children-utilities-COpQjBYN.js";import"./ActionBatch-RbyKfuct.js";import"./useOverlayController-DRqv1s8t.js";import"./useStatic-Die7f9lk.js";import"./browser-DgW11PhP.js";import"./getActionGroupSlot-DiYPO2W1.js";import"./dynamic-_cZQrmBt.js";import"./useLocalizedStringFormatter-DUet38b8.js";import"./Heading-DNOFGRof.js";import"./Heading-Bb4nX13J.js";import"./RSPContexts-n2YtmRLP.js";import"./InlineCode-EzmHe7_J.js";import"./Link-CeQaTb3H.js";import"./usePress-BGs6tBRd.js";import"./Separator-BG4a3hVN.js";import"./Separator-D-1V8FhN.js";import"./CollectionBuilder-B2bzNwzm.js";import"./Text-DmX-Z1ax.js";import"./EmulatedBoldText-cuvIuyGo.js";import"./Text-D55T9z4A.js";import"./TextArea-yLhEKQ7f.js";import"./useFieldComponent-Bk8CgTUl.js";import"./useControlledHostValueProps-BF8eq0rO.js";import"./FieldDescription-B8HCsyh4.js";import"./TextField-Xn26TGA2.js";import"./FieldError-BF0ggQ3i.js";import"./Form-BdU1booJ.js";import"./Group-Dy6AvEDN.js";import"./Input-B9L4_sDl.js";import"./useTextField-DQvvweX9.js";import"./useFormReset-UTIDwNo9.js";import"./useFormValidation-Ca3G17wV.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CNiFry47.js";import"./AlertIcon-KKj1r8Dh.js";import"./LoadingSpinner-tY2JT6X0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CkcG2vDz.js";import"./ContextMenuSection-CEBTY825.js";import"./Dialog-BDRpw9MJ.js";import"./Collection-BBtX_wi9.js";import"./SelectionIndicator-C0I4_uDy.js";import"./SelectionManager-CxfZry6F.js";import"./useEvent-TDS_oy8g.js";import"./useCollator-DPWjVVbc.js";import"./FocusScope-CpKBh6MC.js";import"./VisuallyHidden-BMpCP5yc.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
