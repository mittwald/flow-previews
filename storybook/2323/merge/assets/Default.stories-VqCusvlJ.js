import{j as r,r as f}from"./iframe-BwxXT37i.js";import{M as o}from"./MarkdownEditor-6uPL1JZe.js";import{L as R}from"./Label-CT8SIJ3i.js";import{F as b}from"./FieldError-D9vbHNcD.js";import{B as z}from"./Button-BPaKVUIt.js";import{S as x}from"./Section-DkCPmDIf.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CfZ5nVDi.js";import"./CodeBlock-Hh-4igw2.js";import"./clsx-B-dksMZM.js";import"./CopyButton-C-huasCi.js";import"./IconWarning-Dl-kSkvo.js";import"./flowComponent-CuECaAUk.js";import"./index-DlX0XTQj.js";import"./index-DuE4n7_M.js";import"./remote-DESTNxfj.js";import"./Tooltip-DYOZ-Dsv.js";import"./utils-CJgL2cA6.js";import"./OverlayArrow-D6upTp02.js";import"./useFocus-Czv-Zofa.js";import"./ProgressBar-DCv0JTr3.js";import"./Label-tTpXQ0Np.js";import"./Hidden-DDJevZSF.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-ClAEan5N.js";import"./context-CQJLc664.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-m35H4vh1.js";import"./useControlledState-NXAAE7WV.js";import"./useFocusable-FNm71Fx1.js";import"./react-children-utilities-BHjp1LoB.js";import"./ActionBatch-BYAp_qkn.js";import"./useOverlayController-Clvgh-dL.js";import"./useStatic-DbyoNtmr.js";import"./browser-DWx5NGhf.js";import"./getActionGroupSlot-BlMz2vZa.js";import"./dynamic-dswMj1gt.js";import"./useLocalizedStringFormatter-CKZF_s44.js";import"./Heading-3o8VfDUm.js";import"./Heading-DQrX8nPA.js";import"./RSPContexts-CqVOzJuC.js";import"./InlineCode-BY8o_FQF.js";import"./Link-DIBy7Djl.js";import"./usePress-Bm2JbU_T.js";import"./Separator-BZKFLuAN.js";import"./Separator-D3qEwsya.js";import"./CollectionBuilder-C9gwXR-G.js";import"./Text-COIxE5M6.js";import"./EmulatedBoldText-Cp5bM2Cx.js";import"./Text-CMM9EMAj.js";import"./TextArea-B4OvPLZj.js";import"./useFieldComponent-CUBWvnpR.js";import"./useControlledHostValueProps-C4XwIoTW.js";import"./FieldDescription-BR2v-b2T.js";import"./TextField-DjZwGP6i.js";import"./FieldError-BR2H8wuy.js";import"./Form-BRwB9VIC.js";import"./Group-Dxy68sjF.js";import"./Input-C_uCddka.js";import"./useTextField-COT4ct8W.js";import"./useFormReset-BZECQBSr.js";import"./useFormValidation-CcuhNi7t.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CHWpHdzt.js";import"./AlertIcon-DLpjaGh3.js";import"./LoadingSpinner-C1b88oeC.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-Cy0UoRmV.js";import"./ContextMenuSection-DLmcvkG_.js";import"./Dialog-B0vuTUBy.js";import"./Collection-CBsMtROt.js";import"./SelectionIndicator-D823LuT6.js";import"./SelectionManager-DyNtsV4B.js";import"./useEvent-CJ8tZWHo.js";import"./useCollator-jEna2J2E.js";import"./FocusScope-DUfe_G21.js";import"./VisuallyHidden-BP4pgppw.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
