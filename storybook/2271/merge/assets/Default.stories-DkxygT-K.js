import{j as r,r as f}from"./iframe-BZLAsPNC.js";import{M as o}from"./MarkdownEditor-BpXS2unK.js";import{L as R}from"./Label-DKRPZs6o.js";import{F as b}from"./FieldError-D2O_dT2D.js";import{B as z}from"./Button-CSRJ_rM3.js";import{S as x}from"./Section-CMyrzkHY.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-BYplZLl1.js";import"./CodeBlock-tsCAcu-P.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D6k4RbuM.js";import"./IconWarning-BRgKnpuG.js";import"./flowComponent-DRacmL0k.js";import"./index-Cf3UYr17.js";import"./index-CYjhUmDO.js";import"./remote-DD9qKW4I.js";import"./Tooltip-6SDKyh7G.js";import"./utils-GBJhPEt0.js";import"./OverlayArrow-D53qTIEL.js";import"./useFocus-BAbXgSuO.js";import"./ProgressBar-DjUlq4Bp.js";import"./Label-BJwSQh0g.js";import"./Hidden-C94FXqZA.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DAhF5fA-.js";import"./context-B1QKiSyt.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BdOl-nfx.js";import"./useFocusable-CJlLttAU.js";import"./useFocusRing-DUiko_nB.js";import"./react-children-utilities-bjomvCBp.js";import"./Action-mWe4s719.js";import"./context-Wd_RxxmY.js";import"./useStatic-CJRmLxnl.js";import"./browser-D75BLayN.js";import"./getActionGroupSlot-SLjFrrTu.js";import"./dynamic-DRBl70hS.js";import"./useLocalizedStringFormatter-DU9ffxga.js";import"./Heading-CmA86V_y.js";import"./Heading-Bg25gZBW.js";import"./RSPContexts-DRyX1L5k.js";import"./InlineCode-ClnHWNIv.js";import"./Link-DGFdzo1Q.js";import"./usePress-C3AJe8l0.js";import"./Separator-D8bY6mTG.js";import"./Separator-kzi7KXEN.js";import"./CollectionBuilder-DNc7feWH.js";import"./Text-oqqebshB.js";import"./EmulatedBoldText-i2HM1out.js";import"./Text-C0MYo1gI.js";import"./TextArea-DGdXVe_s.js";import"./TextFieldBase-xhEvPEg1.js";import"./FieldDescription-Dh69MaGI.js";import"./useFieldComponent-C5gewvzz.js";import"./TextField-BKV_Y9qx.js";import"./FieldError-B9G53mk8.js";import"./Form-CDvikIHs.js";import"./Group-D7D0OI93.js";import"./Input-av1t-akK.js";import"./useTextField-BnHH6rYj.js";import"./useFormReset-B4usOE4z.js";import"./useFormValidation-BLPWS9Vb.js";import"./useControlledHostValueProps-D32lW-Mj.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-DgwQ_4kg.js";import"./AlertIcon-wpFTQr76.js";import"./LoadingSpinner-BfzFiOBJ.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-YUsFH9mL.js";import"./ContextMenuSection-B5_hjl5E.js";import"./Dialog-BHTl5ZpY.js";import"./Collection-oaJ1OlFu.js";import"./SelectionIndicator--Gts2DGf.js";import"./SelectionManager-SkouX_in.js";import"./useEvent-BRYkpDGi.js";import"./useCollator-CueQXTCK.js";import"./FocusScope-BleEWu6g.js";import"./VisuallyHidden-B55KrhOv.js";const Nr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
