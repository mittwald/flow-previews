import{r as E,j as r}from"./iframe-Bd70UBfQ.js";import{d as A,P as a,a as I,s,c as K}from"./PasswordCreationField-DNsceWG5.js";import{L as h}from"./Label-2hW8G0Q4.js";import{u as M,F as N,a as z}from"./Form-DO6t9vBU.js";import{s as U}from"./Action-D2Y-ED2g.js";import{B as u}from"./Button-ABWfnhuf.js";import{m as Y}from"./IconWarning-Dx4sU-j9.js";import{C as Z}from"./CopyButton-B-X7w0mw.js";import"./PropsContextProvider-i-IYwZFk.js";import"./mergeRefs-BlmmrTdi.js";import"./index-BXdiMNYx.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./FieldError-BoxMIPJS.js";import"./utils-BmyyYDYY.js";import"./Text-DnJtq-Ca.js";import"./filterDOMProps-CeZl_uWj.js";import"./Group-DfP_y73Q.js";import"./useFocusRing-DTBcK8mU.js";import"./useFocus-_CMpkysi.js";import"./Input-UumKyZ__.js";import"./Hidden-CvIRFHlC.js";import"./TextField-CLBMJ7hZ.js";import"./Form-hLedV1Ku.js";import"./useLabel-w4mzRly1.js";import"./Label-g6yaf0Tw.js";import"./useTextField-CAXEM3Cr.js";import"./useFormReset-D2aXstqB.js";import"./useControlledState-ChZkaxon.js";import"./useFocusable-rNBIEL3L.js";import"./FormField.module-B9AzUSUD.js";import"./FieldError-Cn-PtrFI.js";import"./FieldDescription-CQVRY0WG.js";import"./Text-DDmCr0c3.js";import"./browser-CDzL9dyN.js";import"./EmulatedBoldText-CROyqepx.js";import"./Tooltip-ICLogWws.js";import"./OverlayArrow-Cw8nIh42.js";import"./ProgressBar-CU3IfAKj.js";import"./context-C3LNBa76.js";import"./NumberFormatter-DNR9MAW-.js";import"./useLocalizedStringFormatter-CvG_jx-f.js";import"./ReactAriaControlledValueFix-Cp66fWRw.js";import"./context-CCwAOuxY.js";import"./useStatic-LzaGYsCx.js";import"./ContextualHelpTrigger-Bq7JRKe5.js";import"./Popover-ChoCuIY1.js";import"./DialogTriggerView-DIXKjk2D.js";import"./Dialog-CX-LU2mB.js";import"./Button-BTLR1vS2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Z-qLfgnH.js";import"./RSPContexts-ByMUw4AZ.js";import"./Collection-S5kPVUME.js";import"./CollectionBuilder-DkUHX8v0.js";import"./Separator-DmvFwBU3.js";import"./SearchField-DmyF7w_w.js";import"./SelectionManager-CaueLSz8.js";import"./useEvent-EcQqHcfQ.js";import"./useCollator-DzDuPy2D.js";import"./FocusScope-Bx1kvcbQ.js";import"./VisuallyHidden-CEaQSbTN.js";import"./Heading-D3Cg8aZf.js";import"./Heading-Bkmj7sNk.js";import"./getActionGroupSlot-DRV4djV0.js";import"./LoadingSpinner-C9Uerl8R.js";import"./react-children-utilities-CkwHcocs.js";import"./onlyText-Df2Rx_1Z.js";function $(e){return e instanceof Promise}const k=(e=A)=>async o=>{if(!o)return!0;const t=e.validate(o);return $(t.isValid)?await t.isValid:t.isValid},{action:G}=__STORYBOOK_MODULE_ACTIONS__,H={minComplexity:3,rules:[{ruleType:s.length,min:8,max:12},{ruleType:s.sequence,sequences:[K.number],maxLength:2},{ruleType:s.regex,pattern:"[A-B]",min:1,max:2},{ruleType:s.regex,pattern:"^[A-Za-z0-9]",translationKey:"canNotStartWithSpecialCharacter"},{ruleType:s.hibp},{identifier:"special",ruleType:s.charPool,charPools:["special"],min:1,max:2},{ruleType:s.regex,pattern:"[-_§$%&/=,;.#]",translationKey:"asd",min:1}]},le={title:"Form Controls/PasswordCreationField",component:a,render:e=>{const[o,t]=E.useState("");return r.jsx(a,{value:o,onChange:P=>{G("onChange"),t(P)},...e,children:r.jsx(h,{children:"Password"})})}},i={},n={args:{isDisabled:!0}},m={args:{isRequired:!0}},p={args:{placeholder:"helloMoto"}},d={render:e=>r.jsxs(a,{...e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:r.jsx(Y,{})})]})},l={render:()=>{const e=I.fromDeclaration(H),o=M({defaultValues:{password:""}});return r.jsxs(N,{form:o,onSubmit:async()=>await U(2e3),children:[r.jsx(z,{rules:{required:!0,validate:k()},name:"password",children:r.jsxs(a,{validationPolicy:e,children:[r.jsx(h,{children:"Password"}),r.jsx(u,{children:"asd"})]})}),r.jsx("br",{}),r.jsx(u,{onPress:()=>o.reset(),children:"Reset"}),r.jsx(u,{type:"submit",children:"Submit"})]})}},c={render:e=>{const[o,t]=E.useState("");return r.jsxs(a,{onChange:P=>t(P),...e,children:[r.jsx(h,{children:"Password"}),r.jsx(Z,{text:o})]})}};var x,w,y;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:"{}",...(y=(w=i.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var g,f,C;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
