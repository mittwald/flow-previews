import{r as d,j as r}from"./iframe-BZ1p44Xs.js";import{R as e}from"./Rating-oChFkqjE.js";import{L as m}from"./Label-HK0aVnMe.js";import{F as u}from"./FieldError-t823MHuJ.js";import{u as c,F as g,t as f}from"./ResetButton-BCpb_Ry0.js";import{B as R}from"./Button-BXzJaHaH.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BeCXg6tW.js";import"./flowComponent-DJzVmXlH.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./remote-BEHhGsYi.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./context-C5KsUqFD.js";import"./RadioGroup-BvxJi_vc.js";import"./utils-Cc2PUaBi.js";import"./FieldError-DP4FZd0x.js";import"./Text-DOPFHCGV.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-Lw3Ehme-.js";import"./useLabel-CnpKVv_a.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./SelectionIndicator-CGKICc1u.js";import"./useFormValidation-oY9u4Y5a.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useControlledState-CZ5q_fud.js";import"./FocusScope-C1V2bg9k.js";import"./useFormReset-zSbsyNkN.js";import"./usePress-CQ2PTrK5.js";import"./useFocusable-BXiUGBNe.js";import"./VisuallyHidden-7tUyfyiG.js";import"./useFieldComponent-CdmiPNAX.js";import"./useMakeFocusable-CAYofKPa.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-CHdPuYCZ.js";import"./AlertIcon-CBSVIKWa.js";import"./dynamic-BvoZFGdS.js";import"./ActionGroupView-CiGsVH-s.js";import"./Content-DuDYFNBO.js";import"./Heading-DAuGI7Cj.js";import"./Heading-acaQddxn.js";import"./RSPContexts-C2tYRgOg.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./ActionGroup-D6AJDGA7.js";import"./getActionGroupSlot-D6uph6L1.js";import"./useStatic-BVYP0IGX.js";import"./Modal-hb6flPm1.js";import"./useOverlayController-Dfa0MUCA.js";import"./Overlay-BnwE_UHm.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./ProgressBar-B4598OFN.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DcvNa8Le.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./Separator-edxS6LV2.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./ActionBatch-kp--iEDz.js";import"./ButtonView-BwTEXUNO.js";import"./Flex-Bhdc9ark.js";import"./useRef-Cx2IQloG.js";const zr={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      rating: number;
    }>({
      defaultValues: {
        rating: 2
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={async v => console.log(v.rating)}>
        <Field name="rating">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...n.parameters?.docs?.source}}};const Or=["Default","WithFieldError","WithControlledValue","WithForm"];export{o as Default,a as WithControlledValue,i as WithFieldError,n as WithForm,Or as __namedExportsOrder,zr as default};
