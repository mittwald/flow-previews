import{j as r}from"./iframe-B2KmHf-y.js";import{M as o}from"./MarkdownEditor-BC6yBN0p.js";import{L as W}from"./Label-CEurSWF2.js";import{F as B}from"./FieldError-Rn5jDQFX.js";import{u as I,F as y,a as z}from"./Form-WvlmjZjk.js";import{B as V}from"./Button-BbFeJzIv.js";import"./Markdown-BY_v-v7W.js";import"./CodeBlock-B7exHlPW.js";import"./clsx-B-dksMZM.js";import"./CopyButton-B_yLpzAl.js";import"./IconWarning-BfZFkMSG.js";import"./PropsContextProvider-DZxLHc6o.js";import"./mergeRefs-CLz2fAhu.js";import"./index-DRuHIqI3.js";import"./Tooltip-DGgaeMl9.js";import"./utils-CGNLDjxu.js";import"./OverlayArrow-Bl6z6NHA.js";import"./useFocus-BfYJCy_-.js";import"./ProgressBar-BuiHVKZg.js";import"./Label-1elQ--Nx.js";import"./Hidden-B8XFb6rR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-p5QRldAo.js";import"./context-BMg6CKyL.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CjBtDVaa.js";import"./useFocusable-17jCqo4h.js";import"./useFocusRing-CE2mXCfJ.js";import"./react-children-utilities-CDiFsLVx.js";import"./Action-Cvpx0uN8.js";import"./context-U_3b6bvq.js";import"./useStatic-CZG3tzpM.js";import"./browser-CAjTLwtK.js";import"./getActionGroupSlot-BF5Ft9wX.js";import"./dynamic-DKDa4OpU.js";import"./useLocalizedStringFormatter-C1KZ20Nl.js";import"./Heading-iOnu2cWd.js";import"./Heading-D_u-YVrE.js";import"./RSPContexts-D8MVQLAj.js";import"./InlineCode-Ccs-YeUS.js";import"./Link-BWw-vrJM.js";import"./usePress-DTR6VjFp.js";import"./Separator-Coj3FxoQ.js";import"./Separator-BMWcHxIk.js";import"./CollectionBuilder-BYnkarjY.js";import"./Text-BTzROJ4u.js";import"./EmulatedBoldText-D4QqJqwf.js";import"./Text-BzjjTZNC.js";import"./TextArea-BR2XJJXG.js";import"./TextFieldBase-Uj-ENcIH.js";import"./FormField.module-CqWyJNQI.js";import"./FieldDescription-BnvktwU2.js";import"./TextField-qqPTWDF0.js";import"./FieldError-DUJhKpS8.js";import"./Form-fpEywjGd.js";import"./Group-BWIcWIx6.js";import"./useTextField-kEXXX66E.js";import"./useFormReset-DxoPgNRk.js";import"./ReactAriaControlledValueFix-RoNrHbUR.js";import"./LoadingSpinner-BqqlEuny.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-DtifiV_Y.js";const{action:q}=__STORYBOOK_MODULE_ACTIONS__,Gr={title:"Form Controls/MarkdownEditor",component:o,args:{placeholder:"Write a message..."},render:e=>r.jsx(o,{...e})},s={},t={args:{isDisabled:!0}},a={render:e=>r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})},i={args:{showCharacterCount:!0,maxLength:100}},m={render:e=>r.jsx(o,{...e,isInvalid:!0,defaultValue:"hello",children:r.jsx(B,{children:"Invalid message"})})},n={args:{rows:1,autoResizeMaxRows:5}},p={render:e=>{const v=I({defaultValues:{message:"Hello!"}});return r.jsxs(y,{form:v,onSubmit:async O=>q(O.message),children:[r.jsx(z,{name:"message",rules:{required:"Please enter a message"},children:r.jsx(o,{...e,children:r.jsx(W,{children:"Message"})})}),r.jsx("br",{}),r.jsx(V,{type:"submit",children:"Submit"})]})}};var d,c,l;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var u,g,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
