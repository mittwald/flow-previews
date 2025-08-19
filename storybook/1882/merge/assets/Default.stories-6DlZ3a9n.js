import{j as r}from"./iframe-CqOqoVaP.js";import{M as o}from"./MarkdownEditor-DoZ-LGLC.js";import{L as W}from"./Label-CXX9Ul6V.js";import{F as B}from"./FieldError-EM0a2FXb.js";import{u as I,F as y,a as z}from"./Form-Nmzpv4iw.js";import{B as V}from"./Button-CLlHTQEG.js";import"./Markdown-BtxNWJ5U.js";import"./CodeBlock-BhxUVajt.js";import"./clsx-B-dksMZM.js";import"./CopyButton-CRln0cuh.js";import"./IconWarning-Bl-oEACJ.js";import"./PropsContextProvider-1TKyLHhH.js";import"./mergeRefs-CelTEQRC.js";import"./index-OFJ9qM8_.js";import"./Tooltip-BTs_noE4.js";import"./utils-CLjii6jw.js";import"./OverlayArrow-Demj6cv0.js";import"./useFocus-B9OFNFcs.js";import"./ProgressBar-C7nzlf9n.js";import"./Label-DmkwH-X_.js";import"./Hidden-G9XKC0s_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BbxdwBsw.js";import"./context-V257UCTc.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BdCCPWsc.js";import"./useFocusable-BW0s8v46.js";import"./useFocusRing-BUAA1D8N.js";import"./react-children-utilities-6aP6oPPW.js";import"./Action-fJ1CcCf_.js";import"./context-DEmZbP6Z.js";import"./useStatic-BhcqT1RN.js";import"./browser-5vSgihvA.js";import"./getActionGroupSlot-D2CKZ7h6.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Cmj_M29U.js";import"./Heading-CO3GEgfZ.js";import"./Heading-DhNp_5ef.js";import"./RSPContexts-D4Iw314Z.js";import"./InlineCode-DillJ7QN.js";import"./Link-CMyIQwoS.js";import"./usePress-bNRByjMC.js";import"./Separator-CDhbH7Kr.js";import"./Separator-5LsX3nzm.js";import"./CollectionBuilder-q1IRq8KF.js";import"./Text-B3-X_MJa.js";import"./EmulatedBoldText-CUXBtHhG.js";import"./Text-cqx9MXzt.js";import"./TextArea-HHUHvvWO.js";import"./TextFieldBase-CgcvOgJE.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-S2KPeq-n.js";import"./TextField-DbkzlANK.js";import"./FieldError-Db8jl934.js";import"./Form-DfmQoqyq.js";import"./Group-Cl8UGCCk.js";import"./useTextField-DA4mJlaO.js";import"./useFormReset-DvIrrZd5.js";import"./ReactAriaControlledValueFix-Be-G_pY5.js";import"./LoadingSpinner-ABbum_Xg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-C385LXs-.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
