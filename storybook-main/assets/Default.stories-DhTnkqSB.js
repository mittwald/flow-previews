import{j as r,r as f}from"./iframe-B7t5ja2b.js";import{r as o,g as z}from"./TimeField-DU2gwGxd.js";import{L as R}from"./Label-Db92ClKs.js";import{B as b}from"./Button-BoOZwgfJ.js";import{S as x}from"./Section-oj7pNCYW.js";import"./preload-helper-PPVm8Dsz.js";import"./PropsContextProvider-DYQFvX9W.js";import"./mergeRefs-CZ0PXAOw.js";import"./index-0JV4jXfB.js";import"./clsx-B-dksMZM.js";import"./Accordion-CTUgpZ-B.js";import"./dynamic-DFqFR_25.js";import"./IconWarning-DPxPg2Ca.js";import"./ActionGroup-X0GeQX8f.js";import"./Alert-BcLBdkq5.js";import"./AlertIcon-Ccz2YQls.js";import"./useLocalizedStringFormatter-BbtlMh8_.js";import"./context-DT7PsWv1.js";import"./AlertBadge-DzfN4yVX.js";import"./Text-CDnJtWF_.js";import"./browser-Dz7UytJe.js";import"./utils-DDfw_94E.js";import"./EmulatedBoldText-56hmy21w.js";import"./Align-CqoAJI6M.js";import"./Popover-BzzsvlUu.js";import"./context-XJw--O2B.js";import"./Button-B-5trTj2.js";import"./ProgressBar-CHM1Xifb.js";import"./Hidden-BQUVCBE1.js";import"./filterDOMProps-i7L6S0l1.js";import"./useFocusRing-6FEqbhUJ.js";import"./useFocusable-CX5magUq.js";import"./RSPContexts-BRH8-qft.js";import"./Collection-DAazmHys.js";import"./CollectionBuilder-CJZxBA1k.js";import"./SelectionIndicator-BZI_ZwZN.js";import"./Separator-BYhTCqx2.js";import"./useStatic-BJbQzT7g.js";import"./OverlayTrigger-CQXiz3lB.js";import"./TableFooterRow-BlQ2sKAu.js";import"./SkeletonText-EnN-tyvd.js";import"./Avatar-BoT--Swq.js";import"./AvatarStack-D7dF8Abq.js";import"./Badge-BODqGCzs.js";import"./BigNumber-CaOlSiXS.js";import"./Breadcrumb-kRVQ0P47.js";import"./Link-Cz7JnS5t.js";import"./Heading-DEtNPCJN.js";import"./Legend-Cg9gjTEr.js";import"./FileCardList-CvtUHugH.js";import"./Image-C1Z_Jrqw.js";import"./Color-QRfHlKIC.js";import"./Content-B7myGA-g.js";import"./ContextualHelpTrigger-DvoCzQUP.js";import"./CounterBadge-i2riKAFy.js";import"./DonutChart-B74BzGpv.js";import"./getCategoricalColorByIndex-BIvTpnTO.js";import"./IllustratedMessage-_D41FmY-.js";import"./Header-DRQSlscy.js";import"./Initials-BLqXYT9A.js";import"./InlineCode-DpgdCcoV.js";import"./PopoverTrigger-BZs4Q1Hp.js";import"./LoadingSpinner-CmbUgNIV.js";import"./Separator-Yorp4CJm.js";import"./Message-DM93Jn4g.js";import"./MessageSeparator--4DDPHgg.js";import"./NavigationGroup-k0vE3zib.js";import"./Notification-DFIYUGUC.js";import"./NotificationProvider-BYTR-0ZM.js";import"./ProgressBar-BO_vS1l4.js";import"./Rating-CikA--0V.js";import"./Skeleton-CRxBQiHe.js";const Tr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(R,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(z,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={args:{allowResize:!0}},l={args:{allowResize:"horizontal"}},d={args:{allowResize:"vertical"}},u={args:{allowResize:"vertical",rows:1,autoResizeMaxRows:5}},g={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(R,{children:"Message"})})},h={render:e=>{const s=f.useRef(null),w=()=>{s.current&&s.current.focus()};return r.jsxs(x,{children:[r.jsx(o,{...e,ref:s,children:r.jsx(R,{children:"Message"})}),r.jsx(b,{type:"button",onClick:w,children:"Set focus"})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
