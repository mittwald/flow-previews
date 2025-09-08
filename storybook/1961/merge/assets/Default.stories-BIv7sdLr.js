import{j as r}from"./iframe-xv1hkYrp.js";import{M as o}from"./MarkdownEditor-qzbTroP2.js";import{L as l}from"./Label-DC7JJJSp.js";import{F as V}from"./FieldError-BheKx6KK.js";import{u as q,F as P,a as T}from"./Form-HXOxhIxL.js";import{B as A}from"./Button-CxiqmFwG.js";import"./Markdown-BzkJ7Wb6.js";import"./CodeBlock-QFZiMswa.js";import"./clsx-B-dksMZM.js";import"./CopyButton-DqoUWZgQ.js";import"./IconWarning-0FGrLhxS.js";import"./PropsContextProvider-B9OcsNR0.js";import"./mergeRefs-BFH3kKHm.js";import"./index-Dm2Ajy-S.js";import"./Tooltip-FRifWQvM.js";import"./utils-CpTHh5rs.js";import"./OverlayArrow-CUApfZDY.js";import"./useFocus-CfLpRQBT.js";import"./ProgressBar-DjfrTOAa.js";import"./Label-mG8fBsu4.js";import"./Hidden-BDDDKiVs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BR4zi6f8.js";import"./context-D4r7bTNU.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BbRhH2Ee.js";import"./useFocusable-CwWDG3DW.js";import"./useFocusRing-CU0aNGGs.js";import"./react-children-utilities-BZDUY5_b.js";import"./Action-DwAWbs1F.js";import"./context-DBtsHmqs.js";import"./useStatic-Cda7hAFV.js";import"./browser-lwEiR5fW.js";import"./getActionGroupSlot-hBdF3hkn.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-UiX65Yuj.js";import"./Heading-BBAjkchM.js";import"./Heading-uqNmfPuD.js";import"./RSPContexts-DH2vWQTy.js";import"./InlineCode-02c6_2u2.js";import"./Link-D5sjLXJG.js";import"./usePress-o1s-vRpH.js";import"./Separator-CKorOyFy.js";import"./Separator-qRXs74hc.js";import"./CollectionBuilder-Dvvc79MD.js";import"./Text-DbY3Cuep.js";import"./EmulatedBoldText-CmD3aEdd.js";import"./Text-B_3Y_Nze.js";import"./TextArea-BHJ_UWyk.js";import"./TextFieldBase-CzAvX_GT.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BGM9sp4N.js";import"./TextField-D3hWr_Bw.js";import"./FieldError-wrM_YjD9.js";import"./Form-B-L3i4zG.js";import"./Group-B3GwFloQ.js";import"./useTextField-CIdmu9LD.js";import"./useFormReset-B-Mz2laO.js";import"./ReactAriaControlledValueFix-CrTiyXoc.js";import"./LoadingSpinner-DFWWTIAT.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BusXuZI0.js";const{action:K}=__STORYBOOK_MODULE_ACTIONS__,Zr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},t={},a={args:{isDisabled:!0}},i={render:e=>r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})},n={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(V,{children:"Invalid message"})})},p={args:{rows:1,autoResizeMaxRows:5}},d={render:e=>{const s=q({defaultValues:{message:""}});return r.jsxs(P,{form:s,onSubmit:async z=>{K(z.message),s.reset()},children:[r.jsx(T,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(l,{children:"Message"})})}),r.jsx("br",{}),r.jsx(A,{type:"submit",children:"Submit"})]})}},c={render:e=>r.jsx(o,{...e,onChange:s=>console.log(s),children:r.jsx(l,{children:"Message"})})};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var b,x,M;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(M=(x=a.parameters)==null?void 0:x.docs)==null?void 0:M.source}}};var f,w,E;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props}>
      <Label>Message</Label>
    </MarkdownEditor>
}`,...(E=(w=i.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var F,S,j;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    showCharacterCount: true,
    maxLength: 100
  }
}`,...(j=(S=n.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var C,L,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: props => <MarkdownEditor {...props} isInvalid defaultValue="hello">
      <FieldError>Invalid message</FieldError>
    </MarkdownEditor>
}`,...(k=(L=m.parameters)==null?void 0:L.docs)==null?void 0:k.source}}};var W,v,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    rows: 1,
    autoResizeMaxRows: 5
  }
}`,...(O=(v=p.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var R,_,D;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    const form = useForm({
      defaultValues: {
        message: ""
      }
    });
    return <Form form={form} onSubmit={async v => {
      action(v.message);
      form.reset();
    }}>
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
}`,...(D=(_=d.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var B,I,y;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => {
    return <MarkdownEditor {...props} onChange={v => console.log(v)}>
        <Label>Message</Label>
      </MarkdownEditor>;
  }
}`,...(y=(I=c.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const $r=["Default","Disabled","WithLabel","ShowCharacterCount","WithFieldError","Resizeable","WithForm","WithOnChange"];export{t as Default,a as Disabled,p as Resizeable,n as ShowCharacterCount,m as WithFieldError,d as WithForm,i as WithLabel,c as WithOnChange,$r as __namedExportsOrder,Zr as default};
