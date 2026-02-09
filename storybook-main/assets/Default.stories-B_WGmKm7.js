import{j as r,r as f}from"./iframe-D6IogGzN.js";import{M as o}from"./MarkdownEditor-BRIPHlCd.js";import{L as R}from"./Label-CevfIrA7.js";import{F as b}from"./FieldError-s9c2Hgmm.js";import{B as z}from"./Button-4bsuig8G.js";import{S as x}from"./Section-DSqhsCqF.js";import"./preload-helper-PPVm8Dsz.js";import"./Markdown-DoReqJTb.js";import"./CodeBlock-Dn7n8-CY.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CNcAuEyV.js";import"./IconWarning-CDNOZZaQ.js";import"./flowComponent-0X1Pg4gT.js";import"./index-dqlI56sj.js";import"./index-D5OmXbhN.js";import"./remote-ByQLcsaA.js";import"./Tooltip-D0fuWApA.js";import"./utils-DGVDGTqS.js";import"./OverlayArrow-AHInXUcQ.js";import"./useFocus-JSiA5HpL.js";import"./ProgressBar-DqM5emHd.js";import"./Label-DV4nkt-Z.js";import"./Hidden-Btv7BawI.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel--9PNzusi.js";import"./context-D_0iO3JE.js";import"./NumberFormatter-DNR9MAW-.js";import"./useFocusRing-DeVFSene.js";import"./useControlledState-DoPmGGFu.js";import"./useFocusable-CqeTIxtx.js";import"./react-children-utilities-5e0YRQKc.js";import"./Action-CdCNq_o6.js";import"./context-C3OW4m7r.js";import"./useStatic-BI3MLON7.js";import"./browser-JB3DJ3rF.js";import"./getActionGroupSlot-Ba25QpN_.js";import"./dynamic-DOTSgjbA.js";import"./useLocalizedStringFormatter-HdnRlfeB.js";import"./Heading-DudhsRUa.js";import"./Heading-BP-CAVCT.js";import"./RSPContexts-Y8HBeOxz.js";import"./InlineCode-KAa6afFO.js";import"./Link-DMXQMLuA.js";import"./usePress-OPUq1uX5.js";import"./Separator-qIHLWGx1.js";import"./Separator-BIJp8TvF.js";import"./CollectionBuilder-BDnI44sl.js";import"./Text-DVEzKGc_.js";import"./EmulatedBoldText-DAiBlkMb.js";import"./Text-CSz0hkcR.js";import"./TextArea-Ik6Wm8jZ.js";import"./useFieldComponent-DWOteHG6.js";import"./useControlledHostValueProps-C7phVJY7.js";import"./FieldDescription-CHk77VTi.js";import"./TextField-ByX6MQQi.js";import"./FieldError-CQOrVEPx.js";import"./Form-DHrkWV8M.js";import"./Group-CgQOg1YP.js";import"./Input-DZPKJfFh.js";import"./useTextField-Dmh39Twp.js";import"./useFormReset-zYUel0fa.js";import"./useFormValidation-CGjfwGDf.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-u5jFPjew.js";import"./AlertIcon-BzliTC0_.js";import"./LoadingSpinner-BmFbjzPt.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-BjufwbKz.js";import"./ContextMenuSection-DtXi0ARF.js";import"./Dialog-SQEPLKiU.js";import"./Collection-C7w1JPu7.js";import"./SelectionIndicator-C7krvdos.js";import"./SelectionManager-Twu4QIIp.js";import"./useEvent-BDe--WZk.js";import"./useCollator-st5xggxp.js";import"./FocusScope-DPcfzn1G.js";import"./VisuallyHidden-CtfXU_Om.js";const Kr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{"aria-label":"Message",...e})},s={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(b,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:t=>console.log(t),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const t=f.useRef(null),w=()=>{t.current&&t.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:t,children:r.jsx(R,{children:"Message"})}),r.jsx(z,{type:"button",onClick:w,children:"Set focus"})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
