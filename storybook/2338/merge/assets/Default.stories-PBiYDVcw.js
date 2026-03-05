import{r as d,j as r}from"./iframe-BcqfzoOA.js";import{R as e}from"./Rating-D167w3Pd.js";import{L as m}from"./Label-CQjtN3Gn.js";import{F as u}from"./FieldError-COredAmn.js";import{u as c,F as g,t as f}from"./ResetButton--7CtDtWT.js";import{B as R}from"./Button-C2msjhlA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-Bupv8NYZ.js";import"./flowComponent-E8dWM55n.js";import"./index-DQsNa_Fw.js";import"./index-AZuRIocR.js";import"./remote-x3smQXnv.js";import"./useLocalizedStringFormatter-B6tHJyRA.js";import"./context-qhtcW2k7.js";import"./RadioGroup-Dr8weYjs.js";import"./utils-Bwp7PlhH.js";import"./FieldError-BECkkLSz.js";import"./Text-CALsrB3x.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-CTjpA6Q_.js";import"./useLabel-QCIml9BE.js";import"./Label-B-eADV2d.js";import"./Hidden-BSnUj9OE.js";import"./SelectionIndicator-CJ0E2lWA.js";import"./useFormValidation-BMgNFXni.js";import"./useFocus-BgTDZkkG.js";import"./useFocusRing-CK0lr4fW.js";import"./useControlledState-DVjnE-U4.js";import"./FocusScope-CPNafWEX.js";import"./useFormReset-neBkOLPK.js";import"./usePress-Lauho74f.js";import"./useFocusable-B97W14wM.js";import"./VisuallyHidden-0GKWPw_x.js";import"./useFieldComponent-CSNqGKWj.js";import"./useMakeFocusable-DFtutN-W.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BT22HNok.js";import"./AlertIcon-DTPBfeU8.js";import"./dynamic-CQVZMaTn.js";import"./ActionGroupView-Cb_7F3WZ.js";import"./Content-B5PlHrRz.js";import"./Heading-CPq-dFYl.js";import"./Heading-ZbAppe82.js";import"./RSPContexts-D9SkabFV.js";import"./Text-1XRmWCfn.js";import"./browser-CFz57TUe.js";import"./EmulatedBoldText-ZgwGLRX1.js";import"./ActionGroup-Cjv-TUqT.js";import"./getActionGroupSlot-BmN_sQVv.js";import"./useStatic-feLAmThE.js";import"./Modal-0HeinRUt.js";import"./useOverlayController-CrButM_3.js";import"./Overlay-Ce9iKBD7.js";import"./OverlayContextProvider-Bf_YdWz9.js";import"./LoadingSpinner-ULzpGe8L.js";import"./Dialog-Ce_unDUt.js";import"./Button-CG09EaR6.js";import"./ProgressBar-DUQd-49v.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-BhCzySYR.js";import"./Collection-BEGE9Tvw.js";import"./CollectionBuilder-BDAT2F-t.js";import"./Separator-DguNVtge.js";import"./SelectionManager-CMNiFoQ-.js";import"./useCollator-B74toyi9.js";import"./ActionBatch-D231mKj-.js";import"./ButtonView-BKGV8dNz.js";import"./Flex-BdEN8x02.js";import"./useRef-0Ps7frL9.js";const zr={title:"Form Controls/Rating",component:e,args:{size:"m",isDisabled:!1,isReadOnly:!1,isRequired:!1},argTypes:{size:{control:"inline-radio",options:["s","m"]}},render:t=>r.jsx(e,{"aria-label":"Rating",defaultValue:2,...t,children:r.jsx(m,{children:"Rating"})})},o={},i={render:t=>r.jsxs(e,{...t,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(m,{children:"Rating"}),r.jsx(u,{children:"Please rate"})]})},a={render:t=>{const[s,p]=d.useState(4);return r.jsx(e,{...t,value:s,onChange:l=>p(parseInt(l)),children:r.jsx(m,{children:"Rating"})})}},n={render:()=>{const t=c({defaultValues:{rating:2}}),s=f();return r.jsxs(g,{form:t,onSubmit:async p=>console.log(p.rating),children:[r.jsx(s,{name:"rating",children:r.jsx(e,{children:r.jsx(m,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(R,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
