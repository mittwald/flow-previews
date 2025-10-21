import{j as r}from"./iframe-B0qqkRSc.js";import{t as d,a0 as l,Z as g,E as u,a1 as x}from"./IconWarning-BPZvpYf1.js";import{L as m}from"./Link-GNL1RaFR.js";import{H as s}from"./HeaderNavigation-B4PU_9ji.js";import{B as o}from"./Button-DJYlHg31.js";import{T as p}from"./Text-BrTaOrXE.js";import{I as h}from"./Image-DH3kX1Ad.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-DfYLBUC_.js";import{C as M,M as c}from"./MenuItem-L1Iq8Sir.js";import{C as I}from"./ContextMenuTrigger-iMmLpCAT.js";import"./ContextMenuSection-DodlfDvY.js";import{a as T,M as k}from"./Modal-B1sJaZ0l.js";import{H}from"./Heading-n9cps3Jv.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D28qUuL_.js";import"./index-Bw7Y8sX9.js";import"./index-ByDaWYpT.js";import"./useLocalizedStringFormatter-Hp5e5rkz.js";import"./context-D99v7Uqm.js";import"./utils-fD_u--Rs.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-CRF7-NYn.js";import"./useFocus-D6s77d5g.js";import"./useFocusRing-6YYb42D4.js";import"./useFocusable-BBZGyB5D.js";import"./dynamic-nZoDMFyL.js";import"./LoadingSpinner-BhtZJAGg.js";import"./LiveAnnouncer-Cy654hVN.js";import"./Button-CBrpY8Iv.js";import"./ProgressBar-COiaV-p2.js";import"./Label-CSbZp_Tl.js";import"./Hidden-B-z-l7Br.js";import"./useLabel-sSRBc7PO.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-B1sj-_-y.js";import"./EmulatedBoldText-YngYColk.js";import"./Text-Dr_aqSbj.js";import"./AlertIcon-DBR1t5O9.js";import"./Action-CH6Q1TZa.js";import"./context-CL6SRMFP.js";import"./useStatic-CDvxHEcU.js";import"./getActionGroupSlot-C0ojBLEj.js";import"./Popover-Ckp0SCPP.js";import"./useOverlayController-C7cC56ob.js";import"./OverlayContextProvider-DBk643TH.js";import"./Dialog-Cf8VWc4Y.js";import"./RSPContexts-JwdHw2w4.js";import"./OverlayArrow-B0r4AZS0.js";import"./useControlledState-CB1SzgEG.js";import"./Collection-BezXrWUC.js";import"./CollectionBuilder-CyiVnh3g.js";import"./SelectionIndicator-BJvhD4qq.js";import"./Separator-AYUu4xVa.js";import"./SelectionManager-pQfvjsBD.js";import"./useEvent-BB8Na9jU.js";import"./useCollator-D-k20A4-.js";import"./FocusScope-8IhL3Eed.js";import"./VisuallyHidden-CQaNZ-oY.js";import"./ClearPropsContextView-D258LB2U.js";import"./ClearPropsContext-HA28kjj1.js";import"./Switch-CAdlrxg1.js";import"./useFieldComponent-BdE163vq.js";import"./react-children-utilities-BymZuw_a.js";import"./Label.module-CUYTf9Jc.js";import"./useMakeFocusable-BKFtKrAv.js";import"./useToggleState-J84-hM9P.js";import"./useFormReset-CSVsou9A.js";import"./OverlayTrigger-CFxq5mHG.js";import"./ControlledNotification-WPO1qXkk.js";import"./DialogTriggerView-K5zIqDqM.js";import"./Overlay-b3TzR9n3.js";import"./ButtonView-DN7fl48R.js";import"./Heading-Db08qSfp.js";const Fr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},i={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(I,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(M,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},e={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: props => <HeaderNavigation aria-label="Header navigation" {...props}>
      <Button>
        <IconSearch />
      </Button>
      <Button>
        <IconSupport />
      </Button>
      <ModalTrigger>
        <Button>
          <IconNotification />
        </Button>
        <Modal>
          <Heading>Notifications</Heading>
        </Modal>
      </ModalTrigger>
      <ContextMenuTrigger>
        <Button>
          <Avatar>
            <Image alt="Gopher" src={dummyText.imageSrc} />
          </Avatar>
        </Button>
        <ContextMenu>
          <MenuItem>
            <IconSettings />
            <Text>Profile</Text>
          </MenuItem>
          <MenuItem>
            <IconLogout />
            <Text>Logout</Text>
          </MenuItem>
        </ContextMenu>
      </ContextMenuTrigger>
    </HeaderNavigation>
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Jr=["Default","WithContextMenu","Dark","Light"];export{e as Dark,t as Default,n as Light,i as WithContextMenu,Jr as __namedExportsOrder,Fr as default};
