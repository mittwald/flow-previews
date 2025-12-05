import{j as r,r as f}from"./iframe-C5kwxwrP.js";import{r as o,g as z}from"./TimeField-BYvcgqwg.js";import{L as R}from"./Label-g_jJNVJ9.js";import{B as b}from"./Button-xhQyV7SB.js";import{S as x}from"./Section-CTfCzMjt.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-CTsx1ICl.js";import"./mergeRefs-BjhR6ukN.js";import"./index-D0rH5M4c.js";import"./clsx-B-dksMZM.js";import"./Accordion-_D2E3Sdx.js";import"./dynamic-DeUr6npx.js";import"./IconWarning-DN2_qlIM.js";import"./ActionGroup-KhTdUE8n.js";import"./Alert-CXp9JRJ_.js";import"./AlertIcon-NlAbnesU.js";import"./useLocalizedStringFormatter-t4fh856H.js";import"./context-CDCpqoSP.js";import"./AlertBadge-DvJ4aslu.js";import"./Text-D7zEodsr.js";import"./browser-CdNWfkH8.js";import"./utils-ClkSWM7u.js";import"./EmulatedBoldText-B3gCae9O.js";import"./Align-C7QGDLuz.js";import"./Popover-8f8WewP5.js";import"./context-B1WvD-_p.js";import"./Button-BX1O3153.js";import"./ProgressBar-BHFhq2aG.js";import"./Hidden-8zKzRoXl.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-CedgyfIn.js";import"./useFocusable-BiFYP8le.js";import"./RSPContexts-DRm1Cdpk.js";import"./Collection-OQo4LJVg.js";import"./CollectionBuilder-O5C2uK03.js";import"./SelectionIndicator-Dr4wTiOY.js";import"./Separator-DedkjU77.js";import"./useStatic-BI_2AgVn.js";import"./OverlayTrigger-Br3xhPgq.js";import"./TableFooterRow-Dmtj36Oo.js";import"./SkeletonText-BOPkQIJz.js";import"./Avatar-B8RfKqK_.js";import"./AvatarStack-DMuCDYvd.js";import"./Badge-DjvMDfrb.js";import"./BigNumber-BUKpylgi.js";import"./Breadcrumb-sCKR4Igg.js";import"./Link-vKMcGo7K.js";import"./Heading-SC8_jTYN.js";import"./Legend-y0Ar6iWb.js";import"./FileCardList-Cn86yoca.js";import"./Image-xuezAXss.js";import"./Color-B-qsF8pt.js";import"./Content-BKplhx8p.js";import"./ContextualHelpTrigger-Dfubfga1.js";import"./CounterBadge-CFFm22KU.js";import"./DonutChart-DCgU6wRU.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-D5xFdcQ5.js";import"./Header-Cl9fUDWk.js";import"./Initials-C7J0wROu.js";import"./InlineCode-CiNw8bdK.js";import"./PopoverTrigger-BPBAKMHr.js";import"./LoadingSpinner-BXFlmGo5.js";import"./Separator-BrRhA1HQ.js";import"./Message-BzU_4CRb.js";import"./MessageSeparator-B6AUCd9I.js";import"./NavigationGroup-CVIW0udI.js";import"./Notification-Du18cKPe.js";import"./NotificationProvider-BI6xuOIs.js";import"./ProgressBar-D-RT1H5h.js";import"./Rating-sNa6Va53.js";import"./Skeleton-ByOM2YeZ.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const _r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","AutoResizeable","Resizeable","HorizontallyResizeable","VerticallyResizeable","VerticallyAndAutoResizeable","WithOnChange","WithRef"];export{m as AutoResizeable,t as Default,a as Disabled,l as HorizontallyResizeable,c as Resizeable,n as ShowCharacterCount,u as VerticallyAndAutoResizeable,d as VerticallyResizeable,p as WithFieldError,i as WithLabel,g as WithOnChange,h as WithRef,_r as __namedExportsOrder,Tr as default};
