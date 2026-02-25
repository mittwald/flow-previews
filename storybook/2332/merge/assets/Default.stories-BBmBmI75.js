import{j as r,r as f}from"./iframe-COJ9RE48.js";import{M as o}from"./MarkdownEditor-C1G2AnTl.js";import{L as R}from"./Label-B42D24b-.js";import{F as b}from"./FieldError-CCI4UyFC.js";import{B as z}from"./Button-CMQanS4m.js";import{S as x}from"./Section-CUB_WQoM.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CcRza4NK.js";import"./CodeBlock-CgLK9yD3.js";import"./clsx-B-dksMZM.js";import"./CopyButton-Cn5dEySq.js";import"./IconWarning-BMwiqmvN.js";import"./flowComponent-X1hvA0Vg.js";import"./index-Dygvt5pN.js";import"./index-D5EZb4o9.js";import"./remote-BHpqvLOn.js";import"./Tooltip-Bq2W0Ls1.js";import"./utils-mqorQ4Bj.js";import"./OverlayArrow-BueQpaoQ.js";import"./useFocus-C0sdQCtL.js";import"./ProgressBar-DUh8L45o.js";import"./Label-H5AVk4Tf.js";import"./Hidden-DYByFplp.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CDG97Ijf.js";import"./context-6fEx4cd5.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-CTczndmn.js";import"./useControlledState-BKL31WKE.js";import"./useFocusable-_fwbj2-b.js";import"./react-children-utilities-USj9CO2u.js";import"./ActionBatch-BL-a0sfJ.js";import"./useOverlayController-FIUUtlCA.js";import"./useStatic-BccM3ree.js";import"./browser-DOjt7J27.js";import"./getActionGroupSlot-CmDqFskk.js";import"./dynamic-CTxK5DLa.js";import"./useLocalizedStringFormatter-Cn0B0HDz.js";import"./Heading-DxYLpioN.js";import"./Heading-5-Pxsrno.js";import"./RSPContexts-CacVUoYW.js";import"./InlineCode-CiqiwP71.js";import"./Link-D5t64BFC.js";import"./usePress-CI06DRQW.js";import"./Separator-FQu4ANsr.js";import"./Separator-JpTraE0Z.js";import"./CollectionBuilder-BBRIkTLo.js";import"./Text-Bzpr-GrC.js";import"./EmulatedBoldText-DzXTkxYI.js";import"./Text-De8BGzPh.js";import"./TextArea-Bq3Jli8m.js";import"./useFieldComponent-C2vXV8Pm.js";import"./useControlledHostValueProps-DuU1EZGK.js";import"./FieldDescription-D-lJXb1O.js";import"./TextField-BD9pjh8M.js";import"./FieldError-GKNsJ0Cn.js";import"./Form-DdhXtOmH.js";import"./Group-BNuj0FFe.js";import"./Input-CNxbrx0W.js";import"./useTextField-BWRUvHBZ.js";import"./useFormReset-BVeU8GRO.js";import"./useFormValidation-DQ8UK_oB.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DQ5OQX7v.js";import"./AlertIcon-BTDbiAGg.js";import"./LoadingSpinner-CBTolouR.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BX1Wpmoy.js";import"./ContextMenuSection-BD_6r0jM.js";import"./Dialog-Bn1iAsfr.js";import"./Collection-Cj7qUdsZ.js";import"./SelectionIndicator-D_pnQduh.js";import"./SelectionManager-2oI8n0VA.js";import"./useEvent-CTKdBRUT.js";import"./useCollator-CXxaQt2T.js";import"./FocusScope-BJ-yMckp.js";import"./VisuallyHidden-DAPVNl2G.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
