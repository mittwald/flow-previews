import{j as r,r as f}from"./iframe-DCk1dltx.js";import{M as o}from"./MarkdownEditor-8jDpxffh.js";import{L as R}from"./Label-CoyrnT1D.js";import{F as b}from"./FieldError-CH94tTsu.js";import{B as z}from"./Button-DZuynozn.js";import{S as x}from"./Section-DrurSGwC.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-D7uhXT5x.js";import"./CodeBlock-DGiN7hai.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DvidLTSd.js";import"./IconWarning-Dty0OPVS.js";import"./flowComponent-T1oQuQvq.js";import"./index-Cq8zlQrR.js";import"./index-CPFdYWIc.js";import"./remote-DvlevvD7.js";import"./Tooltip-CXU9dzCj.js";import"./utils-dLBbTpD9.js";import"./OverlayArrow-hOch9Zrk.js";import"./useFocus-Dg1ABCcr.js";import"./ProgressBar-s8plnM_5.js";import"./Label-D8gqX69D.js";import"./Hidden-DtfyHh-u.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-DUKklMlK.js";import"./context-Dv1e9MPf.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CTkZzC5s.js";import"./useControlledState-8RsR_43b.js";import"./useFocusable-CjQRw48Z.js";import"./react-children-utilities-C5wuDm4Y.js";import"./Action-CYJGL_dI.js";import"./context-B-YNLj-l.js";import"./useStatic-CBlVxf-j.js";import"./browser-CviVsCbd.js";import"./getActionGroupSlot-Nfo-4-Bh.js";import"./dynamic-BisWu7fc.js";import"./useLocalizedStringFormatter-leVAnmF6.js";import"./Heading-DeB9aMje.js";import"./Heading-CMNPfOZB.js";import"./RSPContexts-DsTbr3uT.js";import"./InlineCode-We57i3XC.js";import"./Link-A1LlWMZC.js";import"./usePress-BwKHWgOu.js";import"./Separator-DvlrJKZv.js";import"./Separator-CBxzGoiC.js";import"./CollectionBuilder-B_m-ERV7.js";import"./Text-BrHbgyhX.js";import"./EmulatedBoldText-BGXSZcaq.js";import"./Text-PmoJdoY5.js";import"./TextArea-C0EoLg_6.js";import"./useFieldComponent-DRONwAvB.js";import"./useControlledHostValueProps-CdKWKK9K.js";import"./FieldDescription-Dyuwn7yW.js";import"./TextField-BOQwYKzc.js";import"./FieldError-BprKDa8q.js";import"./Form-DaC80i58.js";import"./Group-BdCjqrPc.js";import"./Input-B3blwCao.js";import"./useTextField-DpI6Ye3-.js";import"./useFormReset-BYlFqKoc.js";import"./useFormValidation-BQhs4ME7.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-YVWNWcKU.js";import"./AlertIcon-fe496zUR.js";import"./LoadingSpinner-CKOTMV9B.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DjraAkXw.js";import"./ContextMenuSection-DnWeaq_7.js";import"./Dialog-Cwy0OKAE.js";import"./Collection-X351L5bt.js";import"./SelectionIndicator-kCh5PEOZ.js";import"./SelectionManager-Ck4wL-0T.js";import"./useEvent--hc8j0kD.js";import"./useCollator-Caa43iXB.js";import"./FocusScope-5MRFtdj_.js";import"./VisuallyHidden-DsX3-BDW.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
