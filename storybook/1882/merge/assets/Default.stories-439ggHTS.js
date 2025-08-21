import{j as r}from"./iframe-sBvqvo7_.js";import{M as o}from"./MarkdownEditor-D1FcAqOA.js";import{L as W}from"./Label-DV1oDC-Q.js";import{F as B}from"./FieldError-BOIuciEr.js";import{u as I,F as y,a as z}from"./Form-BZahs9im.js";import{B as V}from"./Button-J4OQPVw4.js";import"./Markdown-CY_Lo86B.js";import"./CodeBlock-BBivj_YI.js";import"./clsx-B-dksMZM.js";import"./CopyButton-BUDj8mFz.js";import"./IconWarning-BMngykPL.js";import"./PropsContextProvider-TllVeCFj.js";import"./mergeRefs-5pXsIHJc.js";import"./index-7PGhSu6n.js";import"./Tooltip-DrGOEbYH.js";import"./utils-B2LriU5l.js";import"./OverlayArrow-CI59sRmD.js";import"./useFocus-CVs-BOzj.js";import"./ProgressBar-BAnWuAWU.js";import"./Label-CX5Sx3US.js";import"./Hidden-DkwdQ2ow.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-xAWuGzS8.js";import"./context-C3R-osbZ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B_tC48lN.js";import"./useFocusable-DA4OWrdg.js";import"./useFocusRing-B1VapAs-.js";import"./react-children-utilities-CIcsY9Iy.js";import"./Action-DhYbBupW.js";import"./context-DwGzY_iF.js";import"./useStatic-Mefs6JzB.js";import"./browser-DLpa1UK_.js";import"./getActionGroupSlot-ZeckI-n0.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-ClADd5Z4.js";import"./Heading-DL2JXIVD.js";import"./Heading-BmYY4TiC.js";import"./RSPContexts-E7RieiUt.js";import"./InlineCode-BS0J8NHX.js";import"./Link-CxjEWmHh.js";import"./usePress-seZ0T8mb.js";import"./Separator-c8Ea4Hfq.js";import"./Separator-CaNgrCXh.js";import"./CollectionBuilder-D_PhybFO.js";import"./Text-C6wVel0M.js";import"./EmulatedBoldText-MyVSeX0t.js";import"./Text-CAc83Hwb.js";import"./TextArea-7ZHhVuYa.js";import"./TextFieldBase-fjvumnTa.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BhaZsciE.js";import"./TextField-Dg3JsHEK.js";import"./FieldError-D_EBRzZI.js";import"./Form-DRweiQ4m.js";import"./Group-DK1ZbmQa.js";import"./useTextField-D2S0T5Ek.js";import"./useFormReset-CzZ7gXc_.js";import"./ReactAriaControlledValueFix-DuPmXFx6.js";import"./LoadingSpinner-DAp3c-UZ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C8-y5amo.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,F;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(F=(x=a.parameters)==null?void 0:x.docs)==null?void 0:F.source}}};var f,w,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var M,S,j;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(j=(S=m.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var L,C,k;n.parameters={...n.parameters,docs:{...(L=n.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(k=(C=n.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var R,_,D;p.parameters={...p.parameters,docs:{...(R=p.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: "Hello!"
      }
    });
    return <Form form={form} onSubmit={async v => action(v.message)}>
        <Field name="message" rules={{
        required: "Please enter a message"
      }}>
          <MarkdownEditor {...props}>
            <Label>Message</Label>
          </MarkdownEditor>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};const Jr=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm"];export{s as Default,t as Disabled,n as Resizeable,i as ShowCharacterCount,m as WithFieldError,p as WithForm,a as WithLabel,Jr as __namedExportsOrder,Gr as default};
