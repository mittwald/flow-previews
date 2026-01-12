import{j as r,r as f}from"./iframe-rOlqB43H.js";import{M as o}from"./MarkdownEditor-BKNSqTlv.js";import{L as R}from"./Label-DjfUIXm4.js";import{F as b}from"./FieldError-B7iskscN.js";import{B as z}from"./Button-Bjmah8F5.js";import{S as x}from"./Section-mXRQd9wd.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BUS_0Gtb.js";import"./CodeBlock-CghxC4DP.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DoKpTiwA.js";import"./IconWarning-Di5b70C_.js";import"./flowComponent-BTUHU9lP.js";import"./index-CsMmwq4Q.js";import"./index-DzmHy0yH.js";import"./remote-DT0xwqhP.js";import"./Tooltip-CY1K5Gep.js";import"./utils-Ccj3VlSZ.js";import"./OverlayArrow-OpojsIn2.js";import"./useFocus-B5EXjvsK.js";import"./ProgressBar-B_qKaJMi.js";import"./Label-Hp9JhiSo.js";import"./Hidden-DOKrBgVK.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-CbRIwZrE.js";import"./context-C0IlT2TZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BGrTDRws.js";import"./useFocusable-vYreZ1I2.js";import"./useFocusRing-lBaj0PQL.js";import"./react-children-utilities-BlVvZ_ce.js";import"./Action-CHaj31Fl.js";import"./context-BHPibtfH.js";import"./useStatic-B2jLjEI4.js";import"./browser-DeRtoS4T.js";import"./getActionGroupSlot-PZdeRoTE.js";import"./dynamic-DIoaqwvI.js";import"./useLocalizedStringFormatter-UF0AsOfY.js";import"./Heading-D93Lplv4.js";import"./Heading-Ds9JRynb.js";import"./RSPContexts-D_fvST6z.js";import"./InlineCode-WpU19_yx.js";import"./Link-EuD5iJUs.js";import"./usePress-D4qdaxsz.js";import"./Separator-DZpjJ0Vm.js";import"./Separator-ClOd3Ug2.js";import"./CollectionBuilder-ClYuAlnm.js";import"./Text-CXuVairg.js";import"./EmulatedBoldText-td0NnrMW.js";import"./Text-CjxKuecI.js";import"./TextArea-BSserOnd.js";import"./TextFieldBase-DnS_bUai.js";import"./FieldDescription-DkDvm_UR.js";import"./useFieldComponent-sAEQMV1g.js";import"./TextField-QNCfzxQC.js";import"./FieldError-CnSkRhK3.js";import"./Form-C-fbNo1l.js";import"./Group-DT2FxViN.js";import"./Input-DoF-1MyK.js";import"./useTextField-CM0Sin4-.js";import"./useFormReset-BZ2QXIUx.js";import"./useFormValidation-DWvRQI9h.js";import"./useControlledHostValueProps-658OjKDK.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DG4pRxN7.js";import"./AlertIcon-BISUoRMj.js";import"./LoadingSpinner-BbLFRhi0.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CW-dJdjv.js";import"./ContextMenuSection-Djibs7wW.js";import"./Dialog-B6AZQFUz.js";import"./Collection-CVOOSTzg.js";import"./SelectionIndicator-CrjLUeul.js";import"./SelectionManager-ewEKpYWO.js";import"./useEvent-Cj6N6ygk.js";import"./useCollator-BzTQk6BT.js";import"./FocusScope-BxWeftc5.js";import"./VisuallyHidden-CY9UiAKH.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
