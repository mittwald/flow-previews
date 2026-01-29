import{j as r,r as f}from"./iframe-DBKYLzDC.js";import{M as o}from"./MarkdownEditor-W_9AdXL8.js";import{L as R}from"./Label-Dsk_CpOI.js";import{F as b}from"./FieldError-BpFJPqyd.js";import{B as z}from"./Button-BFOZVdd1.js";import{S as x}from"./Section-D0mpF1xZ.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-B3QG7YKg.js";import"./CodeBlock-79WbqslS.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Bk8c_52Q.js";import"./IconWarning-BvGiLcXk.js";import"./flowComponent-B-1S5Ra8.js";import"./index-CYdVJgGQ.js";import"./index-Dr37f313.js";import"./remote-CY71mNcv.js";import"./Tooltip-BWFvmCKn.js";import"./utils-BUG9eo0Q.js";import"./OverlayArrow-DgtaOzAt.js";import"./useFocus-TYDADYlM.js";import"./ProgressBar-PjCJ3Rn2.js";import"./Label-B1DR540-.js";import"./Hidden-D_QywUVZ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-BGvoAl80.js";import"./context-DJBj5fN2.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-BksqeYWz.js";import"./useControlledState-CAANpQPW.js";import"./useFocusable-C-cRLAom.js";import"./react-children-utilities-DaShkaJS.js";import"./Action-CPy4r2qq.js";import"./context-Duo0MdiJ.js";import"./useStatic-DlOT-tNl.js";import"./browser-DhKn1UU2.js";import"./getActionGroupSlot-BnE40Egr.js";import"./dynamic-C4GhTGlQ.js";import"./useLocalizedStringFormatter-DY0sD44g.js";import"./Heading-DJddY0uQ.js";import"./Heading-BsK-SIF5.js";import"./RSPContexts-Dx0AtfwO.js";import"./InlineCode-8CVhez0S.js";import"./Link-BrNU1KYR.js";import"./usePress-BZ5qqTtf.js";import"./Separator-CGjLzgHA.js";import"./Separator-CmMmdds6.js";import"./CollectionBuilder-6XtVclM0.js";import"./Text-gSr4j5A3.js";import"./EmulatedBoldText-BKkyEwwz.js";import"./Text-D7rD6BG6.js";import"./TextArea-BhasccHH.js";import"./TextFieldBase-CTAeNQ66.js";import"./FieldDescription-CjIQL23v.js";import"./useFieldComponent-DRt8IUS_.js";import"./TextField-D3roR9vT.js";import"./FieldError-DtV1i0Hc.js";import"./Form-CPSCXeOA.js";import"./Group-eKP5WoY_.js";import"./Input-DeboNFfQ.js";import"./useTextField-EejmEUEW.js";import"./useFormReset-BczjDhHV.js";import"./useFormValidation-DNSyvwAg.js";import"./useControlledHostValueProps-v0KkbD9s.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DJvQ3Kk8.js";import"./AlertIcon-BOzLdeCm.js";import"./LoadingSpinner-CHsn4uBv.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cx-eUYHB.js";import"./ContextMenuSection-DLB9FUAU.js";import"./Dialog-DCNro2wm.js";import"./Collection-CxTKYF8C.js";import"./SelectionIndicator-DEY3TFv1.js";import"./SelectionManager-0frjYs77.js";import"./useEvent-D9IFBpTk.js";import"./useCollator-BjgLOnUX.js";import"./FocusScope-D67WIeli.js";import"./VisuallyHidden-BW797Lc5.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
