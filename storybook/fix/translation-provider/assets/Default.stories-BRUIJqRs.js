import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{d as I,P as a,a as K,s,c as M}from"./PasswordCreationField-B_IducPr.js";import{r as A}from"./index-BdpSHsi2.js";import{L as h}from"./Label-CLhwGY86.js";import{a as z}from"./index-B-lxVbXh.js";import{u as N,F as O,a as Z}from"./Form-BVMCcI_L.js";import{s as $}from"./Action-BL7TXlMd.js";import{B as u}from"./Button-CNwjrwCc.js";import{w as k}from"./IconWarning-BjxJVllB.js";import{C as G}from"./CopyButton-B92c8nIN.js";import"./PropsContextProvider-Qy8AYE5Q.js";import"./mergeRefs-f9wmNE8z.js";import"./clsx-B-dksMZM.js";import"./iframe-CXSCFj_p.js";import"./index-DU8gk_nc.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-lEnnwJps.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-Dhym38A1.js";import"./utils-CNUJJGcD.js";import"./Text-BJ9sUP_l.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-ryYih4mY.js";import"./useFocusRing-BmK03SYd.js";import"./useFocus-Ck8e1iB7.js";import"./Input--iZvazXr.js";import"./Hidden-RoZfe91Z.js";import"./TextField-DnxvqTg5.js";import"./Form-CXVBffIi.js";import"./useLabel-XC8v3O7U.js";import"./Label-DsLtIi5U.js";import"./useTextField-fBojglfp.js";import"./useFormReset-Tdit5Ane.js";import"./useControlledState-rjpdN6qd.js";import"./useFocusable-CxpMFfxV.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-CaFhBCvW.js";import"./FieldDescription-UsyLgtKy.js";import"./Text-yEQ9Wyzi.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-DOyoRrwd.js";import"./index-BAMY2Nnw.js";import"./Tooltip-C_AFRBBt.js";import"./OverlayArrow-D1_DfAqv.js";import"./ProgressBar-BDeVoaCo.js";import"./context-B2NjtFkN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-De8CUlme.js";import"./ReactAriaControlledValueFix-BLJm2WOQ.js";import"./context-CoC883Wo.js";import"./useStatic-BGVIVusM.js";import"./ContextualHelpTrigger-DeVQgUCo.js";import"./Popover-CN4gyWy_.js";import"./DialogTriggerView-DNtzEJMM.js";import"./Dialog-BhYWsRnA.js";import"./Button-BTfgqu_0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DWaDT6O_.js";import"./RSPContexts-Cbm9ZJUe.js";import"./Collection-DM8z4Ehe.js";import"./CollectionBuilder-CnXQkgAs.js";import"./Separator-COTp_Dm9.js";import"./SearchField-_B0N1wQq.js";import"./SelectionManager-CgSqbwt8.js";import"./useEvent-Bvgrsh8W.js";import"./useCollator-C6lmXHHJ.js";import"./FocusScope-BN4baDIG.js";import"./VisuallyHidden-QAya5EjI.js";import"./Heading-ZFXs_v_S.js";import"./Heading-glOOglw2.js";import"./v4-CtRu48qb.js";import"./getActionGroupSlot-DgDrhF_e.js";import"./LoadingSpinner-BvyC3_iA.js";import"./react-children-utilities-DvaK_N8_.js";import"./onlyText-C2raRYWa.js";function H(e){return e instanceof Promise}const J=(e=I)=>async o=>{const t=e.validate(o);return H(t.isValid)?await t.isValid:t.isValid},Q={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[M.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},ye={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onChange:P=>{z("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(k,{})})]})},l={render:()=>{const e=K.fromDeclaration(Q),o=N({defaultValues:{password:""}});return r.jsxs(O,{form:o,onSubmit:async()=>await $(2e3),children:[r.jsx(Z,{rules:{required:!0,validate:J()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(G,{text:o})]})}};var w,x,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,g,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(g=n.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var v,L,W;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(W=(L=d.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var q,R,V;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const policy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async () => await sleep(2000)}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation()
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
}`,...(V=(R=l.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var T,E,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(_=(E=c.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};const fe=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,p as WithPlaceholder,fe as __namedExportsOrder,ye as default};
