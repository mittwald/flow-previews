import{j as r,r as f}from"./iframe-qTztDmQ9.js";import{M as o}from"./MarkdownEditor-B8BNCqWZ.js";import{L as R}from"./Label-B_HtseH-.js";import{F as z}from"./useFieldComponent-DGEmXGQh.js";import{B as b}from"./Button-B4S912ZH.js";import{S as x}from"./Section-_3FhfXN7.js";import"./index-nuYtCEEu.js";import"./Markdown-5WiXim09.js";import"./CodeBlock-CCQskmUk.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Dz14HXMW.js";import"./IconWarning-DPAJHOeD.js";import"./flowComponent-Bak4HlW4.js";import"./index-P12icK_R.js";import"./index-_9O3yG_2.js";import"./Tooltip-B1TI40R5.js";import"./ClearPropsContextView-UvqASDld.js";import"./ClearPropsContext-CkWIpOjD.js";import"./utils-CdWUsvaa.js";import"./OverlayArrow-CaJ_i3sf.js";import"./useFocus-CdJCReig.js";import"./ProgressBar-BBefMTke.js";import"./Label-Bo8Flsc_.js";import"./Hidden-B1UrvXuA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-uF6YmIyy.js";import"./context-bFJEZtp8.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-tlJilXH9.js";import"./useFocusable-Q1pEG0eK.js";import"./useFocusRing-hzSL5p2c.js";import"./react-children-utilities-C8dGDy-T.js";import"./Action-DjajA33V.js";import"./context-Cf3mID_7.js";import"./useStatic-CJuuYRzf.js";import"./browser-D-RoGxAl.js";import"./getActionGroupSlot-CA2czWAm.js";import"./dynamic-BKe9EJ7U.js";import"./useLocalizedStringFormatter-CIyKheH2.js";import"./Heading-BY9Ux7Jv.js";import"./Heading-BEEVnEbY.js";import"./RSPContexts-C3w4xSHJ.js";import"./InlineCode-Lsa9MQvU.js";import"./Link-Cv-RM-OJ.js";import"./usePress-Dljjmf_y.js";import"./Separator-DkdT0hJY.js";import"./Separator-Duld6zlz.js";import"./CollectionBuilder-B-XA9uLm.js";import"./Text-C9f0aLW8.js";import"./EmulatedBoldText-C04JDKuJ.js";import"./Text-B9fEov2V.js";import"./TextArea-B3evL9kW.js";import"./TextFieldBase-_togGZuY.js";import"./FieldDescription-M_rJr44b.js";import"./TextField-bPRfky--.js";import"./Form-D5uPTAwc.js";import"./Group-C0OfF-as.js";import"./Input-DABpozkM.js";import"./useTextField-CGOKXVnS.js";import"./useFormReset-CmjicI53.js";import"./useFormValidation-DR7MCNfC.js";import"./ReactAriaControlledValueFix-bx83Hzv3.js";import"./useManagedValue-6ybja-rS.js";import"./Label.module-CUYTf9Jc.js";import"./LoadingSpinner-C5H0hepe.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BJWArbVY.js";import"./ContextMenuSection-CsIBhJMu.js";import"./Dialog-a9xsPkPz.js";import"./Collection-CQdjy6gf.js";import"./SelectionIndicator-gGCk-Q46.js";import"./SelectionManager-DzXI_LHw.js";import"./useEvent-qXt-HnUm.js";import"./useCollator-CFJsu416.js";import"./FocusScope-BLJU626h.js";import"./VisuallyHidden-DWMxxCWQ.js";const Jr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowHorizontalResize:!0}},d={args:{allowVerticalResize:!0}},u={args:{allowVerticalResize:!0,rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    allowHorizontalResize: true
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    allowVerticalResize: true,
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
}`,...h.parameters?.docs?.source}}};const Kr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,s as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,Kr as __namedExportsOrder,Jr as default};
