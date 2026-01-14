import{j as r,r as f}from"./iframe-ByN7k_Da.js";import{M as o}from"./MarkdownEditor-CazCw8HX.js";import{L as R}from"./Label-BBHPfwM0.js";import{F as b}from"./FieldError-Dqic_FOg.js";import{B as z}from"./Button-DLduC619.js";import{S as x}from"./Section-DskLKzhN.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CAvS3iZx.js";import"./CodeBlock-DUH_pH_-.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DgjUgou4.js";import"./IconWarning-DZTSBBmw.js";import"./flowComponent-BgbG9tfm.js";import"./index-4o_WvcDw.js";import"./index-bUl7c0HC.js";import"./remote-DfUdRpIa.js";import"./Tooltip-BUJrgHIB.js";import"./utils-D8xEYOuW.js";import"./OverlayArrow-DDuz5amj.js";import"./useFocus-CetkVqMR.js";import"./ProgressBar-BhTwnbUK.js";import"./Label-BgjwP7On.js";import"./Hidden-LyHOqGkt.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-x0Vjylpp.js";import"./context-rGL7bC8_.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-kSDz6lD9.js";import"./useFocusable-D-qYSNYm.js";import"./useFocusRing-BkJgNFf3.js";import"./react-children-utilities-DUMPCH1V.js";import"./Action-BmGz2Z1M.js";import"./context-D7USXnL-.js";import"./useStatic-BKQ_69l_.js";import"./browser-Co1wUnJx.js";import"./getActionGroupSlot-QyQMFXwP.js";import"./dynamic-CwJG9Kct.js";import"./useLocalizedStringFormatter-BD0UWBkN.js";import"./Heading-CXqr_WQ4.js";import"./Heading-Ds7RnOJz.js";import"./RSPContexts-BhXs16ev.js";import"./InlineCode-B8ZfvN6j.js";import"./Link-B_PEuL9g.js";import"./usePress-BphJYqm5.js";import"./Separator-nV82Wl7D.js";import"./Separator-DEoWRh-q.js";import"./CollectionBuilder-DO_zs8-i.js";import"./Text-Cb-8LAS5.js";import"./EmulatedBoldText-BCkrp6N6.js";import"./Text-j0nufsIB.js";import"./TextArea-GyWA8FLn.js";import"./TextFieldBase-BnfZc9T9.js";import"./FieldDescription-Brq0GRUO.js";import"./useFieldComponent-DAKvP2zf.js";import"./TextField-BLk0EyLn.js";import"./FieldError-JBJ_RfAm.js";import"./Form-Ccgq6KTF.js";import"./Group-DdqPhRGU.js";import"./Input-BhhO42Bj.js";import"./useTextField-C-YehVVB.js";import"./useFormReset-Bc5cKrWY.js";import"./useFormValidation-C6EqEf55.js";import"./useControlledHostValueProps-Qs5xXZ1D.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BchUExTw.js";import"./AlertIcon-5K33k8fm.js";import"./LoadingSpinner-Cx6oN4QU.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CAFU8pmb.js";import"./ContextMenuSection-Cx4PBQo5.js";import"./Dialog-Cvkq5YiV.js";import"./Collection-BxxE3IdU.js";import"./SelectionIndicator-C44R85aV.js";import"./SelectionManager-DzIRAneQ.js";import"./useEvent-ByW2yFDz.js";import"./useCollator-B3KC4V3q.js";import"./FocusScope-gvfOB4kd.js";import"./VisuallyHidden-CV3OLvgc.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
