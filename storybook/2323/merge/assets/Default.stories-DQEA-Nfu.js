import{j as r,r as f}from"./iframe-Bvl8-Rhq.js";import{M as o}from"./MarkdownEditor-QMCMp6oq.js";import{L as R}from"./Label-BVY1ryMc.js";import{F as b}from"./FieldError-BkA2bgrH.js";import{B as z}from"./Button-_6nTdRI5.js";import{S as x}from"./Section-oIxjsMS9.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-CFqPCCne.js";import"./CodeBlock-Cy_tGZXl.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CWw1h9Iu.js";import"./IconWarning-_TKsX-mO.js";import"./flowComponent-Dyl-PKqx.js";import"./index-C9o18Dic.js";import"./index-uwiO8q01.js";import"./remote-CTLFAioN.js";import"./Tooltip-DBIcQ75K.js";import"./utils-D7QihGpD.js";import"./OverlayArrow-IqXCmbe_.js";import"./useFocus-DXNpHz9A.js";import"./ProgressBar-SpXG_wSx.js";import"./Label-nFrsKobo.js";import"./Hidden-G2krlLtJ.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-B5hAF-sV.js";import"./context--xVWQ6Ca.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-gQZwig4O.js";import"./useControlledState-B5E2fQyc.js";import"./useFocusable-CNuLnnFg.js";import"./react-children-utilities-rQzUtuYf.js";import"./ActionBatch-TusZCIcz.js";import"./useOverlayController-Bk3E4ZUc.js";import"./useStatic-CBtM_Udw.js";import"./browser-B1OJJ6Dj.js";import"./getActionGroupSlot-ConeELan.js";import"./dynamic-hIR-PLzh.js";import"./useLocalizedStringFormatter-Cg9GFE8r.js";import"./Heading-CY0V-mNT.js";import"./Heading-1gB4U-P4.js";import"./RSPContexts-B8aZy59D.js";import"./InlineCode-BAxL-5Qm.js";import"./Link-DA5wd4vL.js";import"./usePress-C7_C1qgD.js";import"./Separator-D09kTWQl.js";import"./Separator-Depa_-5B.js";import"./CollectionBuilder-B8HmBXk8.js";import"./Text-CBdBop4j.js";import"./EmulatedBoldText-BoCe5muM.js";import"./Text-BaIKemC9.js";import"./TextArea-Bx4XH2nw.js";import"./useFieldComponent-D4BbqCv_.js";import"./useControlledHostValueProps-BVnBHhop.js";import"./FieldDescription-BZOs9e_4.js";import"./TextField-Bw9AZxi0.js";import"./FieldError-Du4MQwEm.js";import"./Form-D70wz7aV.js";import"./Group-CdqV-_AW.js";import"./Input-DnkGytYm.js";import"./useTextField-CDBuSrx8.js";import"./useFormReset-C0JkbMmh.js";import"./useFormValidation-Cl3HF3fr.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-D17VFEKw.js";import"./AlertIcon-DxYeysTG.js";import"./LoadingSpinner-Qw5Fkt_A.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-DiDTVCSs.js";import"./ContextMenuSection-DoPnGH4Z.js";import"./Dialog-BAI9Op-m.js";import"./Collection-Ep3IaGeN.js";import"./SelectionIndicator-i35HMeKk.js";import"./SelectionManager-BbidBNN5.js";import"./useEvent-CKY3Iiay.js";import"./useCollator-1R1bRnUk.js";import"./FocusScope-DRyVjtRp.js";import"./VisuallyHidden-ScIHpAUT.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
