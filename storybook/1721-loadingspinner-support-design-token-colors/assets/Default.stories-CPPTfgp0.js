import{r as E,j as r}from"./iframe-ZeYQaqTq.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-D9cUH6OG.js";import{L as h}from"./Label-DaFn2Xmv.js";import{u as M,F as N,a as z}from"./Form-BmPd2M3r.js";import{s as U}from"./Action-RN05S-xF.js";import{B as u}from"./Button-CmxRhHKt.js";import{m as Y}from"./IconWarning-Mt76M62l.js";import{C as Z}from"./CopyButton-CXMoGit7.js";import"./PropsContextProvider-DGPQbSrl.js";import"./mergeRefs-C3tFkdTs.js";import"./index-BPBZxO2T.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-mFBw1lmq.js";import"./utils-CZSTTIRS.js";import"./Text-CTESEC7p.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-DRjYMMoj.js";import"./useFocusRing-D3GUo_QM.js";import"./useFocus-EvOFeEzd.js";import"./Input-Co1lLTdd.js";import"./Hidden-BCzOp-Gy.js";import"./TextField-C77kbV9Z.js";import"./Form-MeaiSeb5.js";import"./useLabel-1QKgiZqr.js";import"./Label-BCX0WWwJ.js";import"./useTextField-D3PtH1hi.js";import"./useFormReset-DYMhoeZf.js";import"./useControlledState-fovAuXst.js";import"./useFocusable-_P_eC141.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-DbdUr15j.js";import"./FieldDescription-BMK4H7nJ.js";import"./Text-ADEYgpsM.js";import"./browser-BE8-G2h8.js";import"./EmulatedBoldText-CNK-5iTs.js";import"./Tooltip-BaCgc4Ii.js";import"./OverlayArrow-BX3D_PZr.js";import"./ProgressBar-y-6EHwAj.js";import"./context-BdRPu6tD.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DqAl4YCp.js";import"./ReactAriaControlledValueFix-MnbwJHnh.js";import"./context-D0miJpww.js";import"./useStatic-B42yuxiF.js";import"./ContextualHelpTrigger-SsSOmfOD.js";import"./Popover-CkN76oe6.js";import"./DialogTriggerView-Udssk73q.js";import"./Dialog-CPFJ-em9.js";import"./Button-8lvA6fYu.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C2f9EIPz.js";import"./RSPContexts-B51mpv1W.js";import"./Collection-DRioiR9B.js";import"./CollectionBuilder-_wjpVTSh.js";import"./Separator-CPoxSccm.js";import"./SearchField-Bklbm_03.js";import"./SelectionManager-exFNYZLH.js";import"./useEvent-BAIrY4aR.js";import"./useCollator-CCl5WH_E.js";import"./FocusScope-C_dTN5HC.js";import"./VisuallyHidden-CW-y3tuT.js";import"./Heading-C7zbFBvp.js";import"./Heading-xW8ZitCB.js";import"./getActionGroupSlot-BZJ1-G1h.js";import"./LoadingSpinner-BsYGnIlm.js";import"./react-children-utilities-Ceo7t6yA.js";import"./onlyText-DhWDDDlm.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(C=(f=n.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var F,b,j;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(j=(b=m.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var B,S,D;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(D=(S=p.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var L,R,T;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var W,_,q;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(q=(_=l.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var v,V,O;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(O=(V=c.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ce=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,d as WithCustomButtons,l as WithForm,p as WithPlaceholder,ce as __namedExportsOrder,le as default};
