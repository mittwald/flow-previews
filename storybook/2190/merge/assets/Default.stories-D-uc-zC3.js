import{j as r,r as f}from"./iframe-DN0fTWGV.js";import{r as o,g as z}from"./TimeField-DXpzyGzy.js";import{L as R}from"./Label-C802sjtx.js";import{B as b}from"./Button-uApu6GnY.js";import{S as x}from"./Section-Bae4yUtt.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-B4BWOGik.js";import"./mergeRefs-aFji3K89.js";import"./index-C-NDeTtD.js";import"./clsx-B-dksMZM.js";import"./Accordion-D7yLcWFC.js";import"./dynamic-Bg-k1EYj.js";import"./IconWarning-Cuf61xud.js";import"./ActionGroup-D2BuDihe.js";import"./Alert-Cpd-iuOs.js";import"./AlertIcon-D_t13U1R.js";import"./useLocalizedStringFormatter-yteDxoWO.js";import"./context-_fNSffOv.js";import"./AlertBadge-Hr_oCvhM.js";import"./Text-CLTzTYkM.js";import"./browser-BG2zS4gf.js";import"./utils-KHZtdcQs.js";import"./EmulatedBoldText-CdlTcGoA.js";import"./Align-DuJPe5gd.js";import"./Popover-oDqr7Nfr.js";import"./context-DUBN3HgP.js";import"./Button-BqbeFKAl.js";import"./ProgressBar-CMyS42Dg.js";import"./Hidden-CpMgfJZp.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-Bi-c5lNH.js";import"./useFocusable-DvSUTL0j.js";import"./RSPContexts-CXdzH5Rq.js";import"./Collection-DPICVRVL.js";import"./CollectionBuilder-7GVzVquf.js";import"./SelectionIndicator-ChEaB0zR.js";import"./Separator-CbRW2pX1.js";import"./useStatic-DA5kar0v.js";import"./OverlayTrigger-BxicfPZ1.js";import"./TableFooterRow-RSgQDu1E.js";import"./SkeletonText-Fk8yZXsj.js";import"./Avatar-CjhgWUJl.js";import"./AvatarStack-DiMUC231.js";import"./Badge-B4N4pUOv.js";import"./BigNumber-Yl5a57NA.js";import"./Breadcrumb-YEGx-rGQ.js";import"./Link-DbZd-iVz.js";import"./Heading-DYEbRjlj.js";import"./Legend-DiZllTBb.js";import"./FileCardList-CA73fY06.js";import"./Image-ncn48exK.js";import"./Color-Chwd73Rj.js";import"./Content-Dl1qh6D4.js";import"./ContextualHelpTrigger-CRucrJit.js";import"./CounterBadge-D53nik_y.js";import"./DonutChart-BUm4qe-w.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-9SL9RU8e.js";import"./Header-DvHWDufz.js";import"./Initials-BnQ1LCtT.js";import"./InlineCode-ByOVybOd.js";import"./PopoverTrigger-DKN0Zj2F.js";import"./LoadingSpinner-CRqVu2d-.js";import"./Separator-2AMI3M16.js";import"./Message-CpojsH-c.js";import"./MessageSeparator-B3ufFzYX.js";import"./NavigationGroup-CQIW4w3C.js";import"./Notification-Bk6cogWg.js";import"./NotificationProvider-Bs-kRf48.js";import"./ProgressBar-iA_T9LR7.js";import"./Rating-DCK456Gd.js";import"./Skeleton-g2Cf08Rc.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
