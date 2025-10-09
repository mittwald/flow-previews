import{j as r,r as V}from"./iframe-Dyev7uqQ.js";import{M as e}from"./MarkdownEditor-C3371Ipk.js";import{L as l}from"./Label-DTUVPi2K.js";import{F as _}from"./FieldError-BvGSOrPS.js";import{B as A}from"./Button-M1gfFqsi.js";import{S as H}from"./Section-BfDLZAnd.js";import"./index-Cun1SEai.js";import"./Markdown-ClDHsvJE.js";import"./CodeBlock-CBNgCPBU.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BdMSzgHH.js";import"./IconWarning-Bsmw3ttA.js";import"./flowComponent-CYF9F6TT.js";import"./index-Du7KBi6Z.js";import"./index-CvZL7rFv.js";import"./Tooltip-D7lGfpNV.js";import"./ClearPropsContextView-C8RU8m_f.js";import"./utils-xAJ0Toj9.js";import"./OverlayArrow-BiwtfbnF.js";import"./useFocus-D9hOsqQc.js";import"./ProgressBar-DcFpY2St.js";import"./Label-DEHEOlON.js";import"./Hidden-D-qqENuK.js";import"./filterDOMProps-CghfNOdR.js";import"./context-z-HIZVd9.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cwb3iJ3d.js";import"./useFocusable-uBBnOUX9.js";import"./useFocusRing-Bh9Ki2YC.js";import"./react-children-utilities-D6rxVtyW.js";import"./Action-B4ax4ap7.js";import"./context-C27PnH24.js";import"./useStatic-Bud3ojrW.js";import"./browser-ChaPEiup.js";import"./getActionGroupSlot-BeoHjYlq.js";import"./dynamic-BE-yoA5C.js";import"./useLocalizedStringFormatter-BxSCNYWk.js";import"./Heading-D12aJeel.js";import"./Heading-StBQxI4O.js";import"./RSPContexts-CLj3WTCR.js";import"./InlineCode-DMjuWtBk.js";import"./Link-BpkYBbWp.js";import"./usePress-DabLIItt.js";import"./Separator-XwpxL0TH.js";import"./Separator-Cv2eEaeb.js";import"./CollectionBuilder-Dc0EH4jX.js";import"./Text-DCNvFKD8.js";import"./EmulatedBoldText-DLRRZTZj.js";import"./Text-s2lACfdw.js";import"./TextArea-BoSh-UBk.js";import"./TextFieldBase-DWJUsyWD.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-B0vuMjWm.js";import"./TextField-BaYoK8D6.js";import"./FieldError-Nbp5sqjA.js";import"./context-xoyjw4Qx.js";import"./Form-DM5JENEN.js";import"./Group-Bx2wIJZm.js";import"./Input-D9REckIy.js";import"./useTextField-B5EVwJKx.js";import"./useFormReset-CiUCuSgO.js";import"./useFormValidation-BpwVeG4s.js";import"./ReactAriaControlledValueFix-B2iOgium.js";import"./useManagedValue-BoQcIlRP.js";import"./LoadingSpinner-B-dR1bVB.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-bK5LqQIE.js";import"./ContextMenuSection-8BAKg1zJ.js";import"./Dialog-BJ5ZUOL1.js";import"./Collection-BT_5iu3o.js";import"./SelectionManager-DOzQyaMw.js";import"./useEvent-CtspRZPb.js";import"./useCollator-BcWYCPX5.js";import"./FocusScope-BBXHLeS0.js";import"./VisuallyHidden-BtDNzz4I.js";const mo={title:"Form Controls/MarkdownEditor",component:e,args:{placeholder:"Write a message..."},render:o=>r.jsx(e,{...o})},s={},a={args:{isDisabled:!0}},i={render:o=>r.jsx(e,{...o,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},p={render:o=>r.jsx(e,{...o,isInvalid:!0,defaultValue:"hello",children:r.jsx(_,{children:"Invalid message"})})},m={args:{rows:1,autoResizeMaxRows:5}},c={render:o=>r.jsx(e,{...o,onChange:t=>console.log(t),children:r.jsx(l,{children:"Message"})})},d={render:o=>{const t=V.useRef(null),T=()=>{t.current&&t.current.focus()};return r.jsxs(H,{children:[r.jsx(e,{...o,ref:t,children:r.jsx(l,{children:"Message"})}),r.jsx(A,{type:"button",onClick:T,children:"Set focus"})]})}};var u,h,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var f,x,M;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
