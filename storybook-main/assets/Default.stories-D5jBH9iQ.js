import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as t,a as A,s as o,c as I}from"./PasswordCreationField-CD7KtgT8.js";import{r as V}from"./index-BdpSHsi2.js";import{L as u}from"./Label-CNge8ba6.js";import{a as _}from"./index-B-lxVbXh.js";import{u as z,F as K,a as N}from"./Form-DNAczzcl.js";import{s as O}from"./Action-CklfPK34.js";import{B as d}from"./Button-0nb4l8XZ.js";import{w as Z}from"./IconWarning-BA1k_sLS.js";import{C as G}from"./CopyButton-Chg3-gF5.js";import"./PropsContextProvider-BtE5ePtu.js";import"./mergeRefs-COuk0-v5.js";import"./clsx-B-dksMZM.js";import"./iframe-pRxn1HVD.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-D2eBwE7I.js";import"./utils-q_Aud5Js.js";import"./Text-DtGJyZhh.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-wR-qYHNv.js";import"./useFocusRing-DY5AGIis.js";import"./useFocus-4XTC7e6o.js";import"./Input-Dom3MqAg.js";import"./Hidden-RoZfe91Z.js";import"./TextField-BqNO7Lq4.js";import"./Form-CSvT4C5Q.js";import"./useLabel-DtWExE0a.js";import"./Label-C5gSD-Mq.js";import"./useTextField-xVyqyefx.js";import"./useFormReset-B9LhY6oC.js";import"./useControlledState-rjpdN6qd.js";import"./useFocusable-BXcKiciC.js";import"./useFormValidation-BP6joqgG.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-HwInc1xG.js";import"./FieldDescription-BSPzt4dv.js";import"./Text-Cltb_Yn8.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./index-BAMY2Nnw.js";import"./Tooltip-CVZ3fbfG.js";import"./OverlayArrow-Czdks72e.js";import"./ProgressBar-Dwuqfbjf.js";import"./context-C-2WHVw-.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-Bs3jJydz.js";import"./ReactAriaControlledValueFix-SEnjHoLp.js";import"./context-CNbEpgXv.js";import"./useStatic-C3UrMAUw.js";import"./ContextualHelpTrigger-CL_tMRJ0.js";import"./Popover-CwV3By19.js";import"./DialogTriggerView-BkaOyIT_.js";import"./Dialog-CnnCEkMG.js";import"./Button-B8HIYCal.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-mDFtgnbt.js";import"./RSPContexts-Cbm9ZJUe.js";import"./Collection-CgAMQp3e.js";import"./CollectionBuilder-DkA--_MS.js";import"./Separator-Dc9-x765.js";import"./SelectionManager-ClU3Y9Vn.js";import"./useEvent-C_OiV_rL.js";import"./useCollator-CmZhdF0V.js";import"./FocusScope-D_x47-q0.js";import"./VisuallyHidden-D-Ys6Nju.js";import"./Heading-pIuO0OWL.js";import"./Heading-PKR8zMP8.js";import"./v4-CtRu48qb.js";import"./getActionGroupSlot-IWnaUY_k.js";import"./LoadingSpinner-Dvs-A3DV.js";import"./react-children-utilities-DvaK_N8_.js";import"./onlyText-C2raRYWa.js";const H={minComplexity:3,rules:[{ruleType:o.length,min:8,max:12},{ruleType:o.sequence,sequences:[I.number],maxLength:2},{ruleType:o.regex,pattern:"[A-B]",min:1,max:2},{ruleType:o.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:o.hibp},{identifier:"special",ruleType:o.charPool,charPools:["special"],min:1,max:2},{identifier:"numbers",ruleType:o.charPool,charPools:["numbers"],min:1,max:2},{ruleType:o.blocklist,blocklist:["foo","bar"],substringMatch:!0}]},Po={title:"Form Controls/PasswordCreationField",component:t,render:e=>r.jsx(t,{onChange:_("onChange"),...e,children:r.jsx(u,{children:"Password"})})},a={},i={args:{isDisabled:!0}},n={args:{isRequired:!0}},m={args:{placeholder:"helloMoto"}},p={render:e=>r.jsxs(t,{...e,children:[r.jsx(u,{children:"Password"}),r.jsx(d,{children:r.jsx(Z,{})})]})},c={render:()=>{const e=A.fromDeclaration(H),s=z({defaultValues:{password:""}});return r.jsxs(K,{form:s,onSubmit:async()=>await O(2e3),children:[r.jsx(N,{rules:{required:!0},name:"password",children:r.jsxs(t,{validationPolicy:e,children:[r.jsx(u,{children:"Password"}),r.jsx(d,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(d,{onPress:()=>s.reset(),children:"Reset"}),r.jsx(d,{type:"submit",children:"Submit"})]})}},l={render:e=>{const[s,M]=V.useState("");return r.jsxs(t,{onChange:k=>M(k),...e,children:[r.jsx(u,{children:"Password"}),r.jsx(G,{text:s})]})}};var h,x,P;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:"{}",...(P=(x=a.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var w,b,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,g,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,L;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(L=(D=p.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var W,q,T;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true
      }} name="password">
          <PasswordCreationField validationPolicy={policy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(T=(q=c.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var R,v,E;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(v=l.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};const wo=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{a as Default,i as Disabled,n as Required,l as WithCopyButton,p as WithCustomButtons,c as WithForm,m as WithPlaceholder,wo as __namedExportsOrder,Po as default};
