import{j as r,r as f}from"./iframe-DzjGvN4s.js";import{M as o}from"./MarkdownEditor-COK5M4Gb.js";import{L as R}from"./Label-B3AoafTb.js";import{F as b}from"./FieldError-wOx9kOaR.js";import{B as z}from"./Button-BJ_Dg9g5.js";import{S as x}from"./Section-BM-LoTUP.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BvE-_zPf.js";import"./CodeBlock-DqI_gqcI.js";import"./clsx-B-dksMZM.js";import"./CopyButton-xh9xaTaS.js";import"./IconWarning-s7NSVc-U.js";import"./flowComponent-CmnGOp_t.js";import"./index-bYngC-Dz.js";import"./index-CvRHkpxf.js";import"./remote-cWDQ0h3n.js";import"./Tooltip-IWqKa58f.js";import"./utils-CaY6-C_T.js";import"./OverlayArrow-k_B_Hrky.js";import"./useFocus-DFbK7vZ5.js";import"./ProgressBar-BHFfTD-E.js";import"./Label-CJv7rcJv.js";import"./Hidden-CvDiJOD9.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-7qQt_FP7.js";import"./context-kL1uqGsw.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-wMvVuuCP.js";import"./useControlledState-DSekeTPZ.js";import"./useFocusable-CvI9gOnC.js";import"./react-children-utilities-CFqG3uxz.js";import"./Action-y81vuNMi.js";import"./context-_PoIYhJG.js";import"./useStatic-CvNWVJY5.js";import"./browser-DnRnaS9W.js";import"./getActionGroupSlot-BxJKXkIY.js";import"./dynamic-D8j0vgwF.js";import"./useLocalizedStringFormatter-exeLKOxN.js";import"./Heading-J6woGLR_.js";import"./Heading-DMPfqJKh.js";import"./RSPContexts-D4WEG-B8.js";import"./InlineCode-D1FErVwe.js";import"./Link-Bj886ruI.js";import"./usePress-D3so-j8A.js";import"./Separator-Cy1Hg2ho.js";import"./Separator-w2v2LtVY.js";import"./CollectionBuilder-60Hh4eJv.js";import"./Text--QhKw61r.js";import"./EmulatedBoldText-DBPO29Lf.js";import"./Text-CsTzsUsp.js";import"./TextArea-tlYL5sXj.js";import"./useFieldComponent-BsZ1NoTf.js";import"./useControlledHostValueProps-B88rGyy5.js";import"./FieldDescription-Bk9-3UzX.js";import"./TextField-CxS1QcE8.js";import"./FieldError-Cm2eS0Qx.js";import"./Form-C7-6k5t9.js";import"./Group-BEToeHeW.js";import"./Input-BbhuOsE_.js";import"./useTextField-Cth1_8nw.js";import"./useFormReset-lQZuuaDU.js";import"./useFormValidation-CCaCqHBd.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-cLdL_XpT.js";import"./AlertIcon-C0w0dGgz.js";import"./LoadingSpinner-DZ3G9IyW.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BzmY1str.js";import"./ContextMenuSection-ehzNPOBV.js";import"./Dialog-BxRkHkZu.js";import"./Collection-BYckC4CV.js";import"./SelectionIndicator-BO4ZIlru.js";import"./SelectionManager-DC2ExAk3.js";import"./useEvent-DrzTQfG9.js";import"./useCollator-BxOUjI0N.js";import"./FocusScope-D_QyZTFZ.js";import"./VisuallyHidden-SzhNhvGP.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
