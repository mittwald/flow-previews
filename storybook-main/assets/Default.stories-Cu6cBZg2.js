import{j as r,r as V}from"./iframe-CwjVVvSu.js";import{M as e}from"./MarkdownEditor-BPaQdXrI.js";import{L as l}from"./Label-CmvTTYLZ.js";import{F as _}from"./FieldError-XyqikU8N.js";import{B as A}from"./Button-BzxBG2HJ.js";import{S as H}from"./Section-CxEg7JTo.js";import"./index-Cun1SEai.js";import"./Markdown-Dp7Ut0Do.js";import"./CodeBlock-CFag-fjj.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CZ3q2Tyr.js";import"./IconWarning-B6H6J5Pk.js";import"./flowComponent-CL0EVs0o.js";import"./index-CVGQdXYt.js";import"./index-Bxp7_DVb.js";import"./Tooltip-Cfgyd_yB.js";import"./ClearPropsContextView-CpKm48Q9.js";import"./utils-OpG5u5ZF.js";import"./OverlayArrow-n3jQFhGI.js";import"./useFocus-YxLRULIL.js";import"./ProgressBar-QC1O3iDd.js";import"./Label-BELpmtJQ.js";import"./Hidden-BrRDJs-s.js";import"./filterDOMProps-CghfNOdR.js";import"./context-YbH8ssAd.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-3R78iQB5.js";import"./useFocusable-CooOyqEQ.js";import"./useFocusRing-DVoBnH5y.js";import"./react-children-utilities-DNspv2so.js";import"./Action-CQ8EezpL.js";import"./context-C4fo6dak.js";import"./useStatic-DG0mSv16.js";import"./browser-DnOs_TEg.js";import"./getActionGroupSlot-D-7WMSXI.js";import"./dynamic-BP9Yj9yh.js";import"./useLocalizedStringFormatter-BEI6070A.js";import"./Heading-Z1c9rlfR.js";import"./Heading-oClWNrqM.js";import"./RSPContexts-C2pkpfxa.js";import"./InlineCode-BFWAyBJH.js";import"./Link-00PuI0Ny.js";import"./usePress-CTJZYj-E.js";import"./Separator-v7noGBPE.js";import"./Separator-DgCYxSL8.js";import"./CollectionBuilder-DmI3Nmaj.js";import"./Text-BOmlTVxc.js";import"./EmulatedBoldText-pbz3Nf-x.js";import"./Text-lT5rhDYZ.js";import"./TextArea-DMj0oyvY.js";import"./TextFieldBase-BeraLkZm.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-C3q2LEa8.js";import"./TextField-CogGwaCl.js";import"./FieldError-C3URs1EZ.js";import"./context-Boi0W4no.js";import"./Form-BBcAxf0K.js";import"./Group-BsewxSmY.js";import"./Input-DebxReei.js";import"./useTextField-DeAEFuQI.js";import"./useFormReset-BtU7PEqW.js";import"./useFormValidation-Z5AW4dUj.js";import"./ReactAriaControlledValueFix-DOkLGVFB.js";import"./useManagedValue-DN_78QxV.js";import"./LoadingSpinner-BwQDbOwS.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-ClXMkmVB.js";import"./ContextMenuSection-BSZPjhOz.js";import"./Dialog-D6Mx5C8w.js";import"./Collection-cKUjot9l.js";import"./SelectionManager-BvVPZ4Sc.js";import"./useEvent-tgNtvJjt.js";import"./useCollator-3AvnbkJz.js";import"./FocusScope-3UfsOkyw.js";import"./VisuallyHidden-DYp4WZRH.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var E,w,b;i.parameters={...i.parameters,docs:{...(E=i.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(b=(w=i.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var R,S,C;n.parameters={...n.parameters,docs:{...(R=n.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(C=(S=n.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var j,L,k;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(k=(L=p.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var F,W,v;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(v=(W=m.parameters)==null?void 0:W.docs)==null?void 0:v.source}}};var D,z,B;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(B=(z=c.parameters)==null?void 0:z.docs)==null?void 0:B.source}}};var I,O,y;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(y=(O=d.parameters)==null?void 0:O.docs)==null?void 0:y.source}}};const co=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithOnChange","WithRef"];export{s as Default,a as Disabled,m as Resizeable,n as ShowCharacterCount,p as WithFieldError,i as WithLabel,c as WithOnChange,d as WithRef,co as __namedExportsOrder,mo as default};
