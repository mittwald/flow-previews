import{r as E,j as r}from"./iframe-DHE-6oks.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-DS8JoDUU.js";import{L as h}from"./Label-CsrQ8fuF.js";import{u as M,F as N,a as z}from"./Form-Cv2JPUa-.js";import{s as U}from"./Action-VI9cAUPd.js";import{B as u}from"./Button-DTmWymNY.js";import{m as Y}from"./IconWarning-Cic1MV-m.js";import{C as Z}from"./CopyButton-CzQZ8DLF.js";import"./PropsContextProvider-CehOxfFR.js";import"./mergeRefs-CXJw6JB3.js";import"./index-DuoRw6XS.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-B9K2-GIk.js";import"./utils-x8BQYX4-.js";import"./Text-NjMLt3Ri.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-DF6Pci-D.js";import"./useFocusRing-OVXrKScL.js";import"./useFocus-DYGSM8hG.js";import"./Input-DW8k9amG.js";import"./Hidden-wM-8btK_.js";import"./TextField-D2dBDnFN.js";import"./Form-B4xkNDou.js";import"./useLabel-DfuADmFb.js";import"./Label-CRHcOnwp.js";import"./useTextField-C3m2uMQS.js";import"./useFormReset-BToKGHXS.js";import"./useControlledState-DtNNEi2b.js";import"./useFocusable-BqyWOhG-.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-cJslzypo.js";import"./FieldDescription-EPVobIp_.js";import"./Text-DvqkAO4K.js";import"./browser-DInQ8S6B.js";import"./EmulatedBoldText-h05YTKz1.js";import"./Tooltip-d3nFTWvV.js";import"./OverlayArrow-BzBmdrc3.js";import"./ProgressBar-D7CY6Vap.js";import"./context-DFltFWpJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-DWrFqDaN.js";import"./ReactAriaControlledValueFix-Dr1Gi7yv.js";import"./context-C7gD2f3O.js";import"./useStatic-RbPw01cN.js";import"./ContextualHelpTrigger-BEy9eaUP.js";import"./Popover-CEn09y9m.js";import"./DialogTriggerView-B81Eu0Os.js";import"./Dialog-CmbCeDcm.js";import"./Button-Dx38wLWj.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DKLIgAwR.js";import"./RSPContexts-B_OykxZB.js";import"./Collection-DvDkMv-D.js";import"./CollectionBuilder-DOrrKo3i.js";import"./Separator-s586xCfF.js";import"./SearchField-B1O_97SX.js";import"./SelectionManager-jb_M3DhH.js";import"./useEvent-DAUMmEgK.js";import"./useCollator-_wAd7c24.js";import"./FocusScope-DduXebcv.js";import"./VisuallyHidden-JQCaE509.js";import"./Heading-jYuKOunx.js";import"./Heading-eFzWwoOT.js";import"./getActionGroupSlot-BAwn8Ach.js";import"./LoadingSpinner-CGq1_nld.js";import"./react-children-utilities-Cjyoxb76.js";import"./onlyText-BjfQG9Wl.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
