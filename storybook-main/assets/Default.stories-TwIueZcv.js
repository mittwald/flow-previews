import{r as A,j as r}from"./iframe-Cs4u3jai.js";import{d as I,e as K,P as a,a as M,s,c as N}from"./PasswordCreationField-CNMXMCGU.js";import{L as h}from"./Label-B0Y8PcLC.js";import{u as z,F as U,a as Y}from"./Form-Cd-S2oed.js";import{s as Z}from"./Action-XTvpAmRi.js";import{B as u}from"./Button-Djxd_lPT.js";import{m as $}from"./IconWarning-0BVBVXS4.js";import{C as k}from"./CopyButton-Djs1XgHq.js";import"./PropsContextProvider-DyrLVIsu.js";import"./mergeRefs-DcFlLbGV.js";import"./index-DwmW63z3.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-3wBrWCfg.js";import"./utils-vclj1Qm2.js";import"./Text-B7UIaBOw.js";import"./filterDOMProps-CghfNOdR.js";import"./Group-Uo6LargV.js";import"./Hidden-CdwQ6yqP.js";import"./useFocusRing-BLMln0L2.js";import"./useFocus-ClAUtHT6.js";import"./TextField-Dg5MZqjY.js";import"./Form-D6x5jYca.js";import"./useLabel-BkGcoVJa.js";import"./Label-S4RmJPV5.js";import"./useTextField-CQf7PcN9.js";import"./useFormReset-u7ab4fFg.js";import"./useControlledState-D-JQKTrH.js";import"./useFocusable-BN_CcrEu.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Wsj8Agfe.js";import"./FieldDescription-DtCbknnc.js";import"./Text-BBeTGXmh.js";import"./browser-BbmE0SWg.js";import"./EmulatedBoldText-Wf0lwtn6.js";import"./Tooltip-DWfrsjLj.js";import"./OverlayArrow-BnL8IPkJ.js";import"./ProgressBar-BneW9jxU.js";import"./context-BvTQ7OVQ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-D4NA580S.js";import"./ReactAriaControlledValueFix-CqMRaxS_.js";import"./ContextualHelpTrigger-CIwzA2WU.js";import"./Popover-CdGjSG1y.js";import"./DialogTriggerView-y3QEF81s.js";import"./context-BVRdILhz.js";import"./useStatic-qxHK3Mia.js";import"./Dialog-C6Y-YQl5.js";import"./Button-x10lnAMQ.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BSD3tvTg.js";import"./RSPContexts-BOo-h-N-.js";import"./Collection-Bxbbk1lS.js";import"./CollectionBuilder-DJiQAvza.js";import"./Separator-CA1KhONo.js";import"./SearchField-AfdpK6Ve.js";import"./useEvent-Cx7qitQN.js";import"./SelectionManager-DjDhbl_H.js";import"./useCollator-BvHyoRqD.js";import"./FocusScope-FJ_dmtXb.js";import"./VisuallyHidden-BT36-Qvg.js";import"./Heading-Qz_GDDrV.js";import"./Heading-Bm4Z6AbO.js";import"./getActionGroupSlot-Kd7a9PPP.js";import"./LoadingSpinner-C_G5gUEJ.js";import"./react-children-utilities-pcET_qLh.js";import"./onlyText-gOzARJXU.js";const G=(e=I)=>async o=>{if(!o)return!0;const t=e.validate(o);return K(t.isValid)?await t.isValid:t.isValid},{action:x}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[N.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=A.useState("");return r.jsx(a,{value:o,onValidationResult:x("onValidationResult"),onChange:P=>{x("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},l={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx($,{})})]})},d={render:()=>{const e=M.fromDeclaration(H),o=z({defaultValues:{password:""}});return r.jsxs(U,{form:o,onSubmit:async t=>{await Z(2e3),console.log("submitted",t)},children:[r.jsx(Y,{rules:{required:!0,validate:G(e)},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=A.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(k,{text:o})]})}};var w,g,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:"{}",...(y=(g=i.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var C,f,b;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    isDisabled: true
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var F,j,B;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    isRequired: true
  }
}`,...(B=(j=m.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var S,D,R;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    placeholder: "helloMoto"
  }
}`,...(R=(D=p.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var v,L,V;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: props => {
    return <PasswordCreationField {...props}>
        <Label>Password</Label>
        <Button>
          <IconDanger />
        </Button>
      </PasswordCreationField>;
  }
}`,...(V=(L=l.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var T,W,_;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const customPolicy = Policy.fromDeclaration(policyDecl);
    const form = useForm({
      defaultValues: {
        password: ""
      }
    });
    return <Form form={form} onSubmit={async values => {
      await sleep(2000);
      console.log("submitted", values);
    }}>
        <Field rules={{
        required: true,
        validate: generatePasswordCreationFieldValidation(customPolicy)
      }} name="password">
          <PasswordCreationField validationPolicy={customPolicy}>
            <Label>Password</Label>
            <Button>asd</Button>
          </PasswordCreationField>
        </Field>
        <br />
        <Button onPress={() => form.reset()}>Reset</Button>
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...(_=(W=d.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var q,O,E;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: props => {
    const [password, setPassword] = useState<string>("");
    return <PasswordCreationField onChange={v => setPassword(v)} {...props}>
        <Label>Password</Label>
        <CopyButton text={password} />
      </PasswordCreationField>;
  }
}`,...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};const de=["Default","Disabled","Required","WithPlaceholder","WithCustomButtons","WithForm","WithCopyButton"];export{i as Default,n as Disabled,m as Required,c as WithCopyButton,l as WithCustomButtons,d as WithForm,p as WithPlaceholder,de as __namedExportsOrder,le as default};
