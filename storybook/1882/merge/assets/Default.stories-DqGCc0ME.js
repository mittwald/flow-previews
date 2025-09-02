import{j as r}from"./iframe-DaUAgimo.js";import{M as o}from"./MarkdownEditor-DA3LgTxV.js";import{L as W}from"./Label-BgV7ip1p.js";import{F as B}from"./FieldError-BvHufvs5.js";import{u as I,F as y,a as z}from"./Form-v8meviLP.js";import{B as V}from"./Button-BNJyR7fn.js";import"./Markdown-YEg5pzBc.js";import"./CodeBlock-BHFLhb0-.js";import"./clsx-B-dksMZM.js";import"./CopyButton-D_2ZJVVr.js";import"./IconWarning-Jl_pbRrq.js";import"./PropsContextProvider-nbYVlS2U.js";import"./mergeRefs-tiTDQII5.js";import"./index-D-fn1bJu.js";import"./Tooltip-B91tuinO.js";import"./utils-Dv3HAiNW.js";import"./OverlayArrow-De5g7eHd.js";import"./useFocus-DfmeJaC9.js";import"./ProgressBar-Cs4fjP5n.js";import"./Label-BA5dW2di.js";import"./Hidden-DmAVKgDo.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-4W4rDaLN.js";import"./context-DGmQszzG.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-HXI1EgZM.js";import"./useFocusable-91Y8y3Dw.js";import"./useFocusRing-6fCWhHXp.js";import"./react-children-utilities-DtupJrsM.js";import"./Action-6Ewb0bna.js";import"./context-C_g0dLJp.js";import"./useStatic-Djoi-J49.js";import"./browser-DFc9RAYz.js";import"./getActionGroupSlot-V1QIM2yi.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-Dbj9oBzk.js";import"./Heading-CZC9UHM5.js";import"./Heading-CBph4xMm.js";import"./RSPContexts-GpjylgJ9.js";import"./InlineCode-sIoz9i1a.js";import"./Link--At85h3G.js";import"./usePress-BEu6_Qu_.js";import"./Separator-DTG2vbVJ.js";import"./Separator-AEaXKmSc.js";import"./CollectionBuilder-Cu6aZgsw.js";import"./Text-DqLl2XlR.js";import"./EmulatedBoldText-B3KIlJpF.js";import"./Text-DKL0uLiC.js";import"./TextArea-BJRDm89W.js";import"./TextFieldBase-bQmf6Va2.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-cWSnkLNH.js";import"./TextField-Cz-3i59y.js";import"./FieldError-CBWJBmz-.js";import"./Form-StxO2YAG.js";import"./Group-D-iHY_KE.js";import"./useTextField-DwvDg_tT.js";import"./useFormReset-CA4kI8bZ.js";import"./ReactAriaControlledValueFix-BuhEcnW8.js";import"./LoadingSpinner-MgjzVDHH.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-CD_lBn7X.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
