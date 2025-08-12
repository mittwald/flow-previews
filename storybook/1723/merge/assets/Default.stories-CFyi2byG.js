import{j as r}from"./iframe-BpEavT04.js";import{t as d,$ as l,X as g,K as u,a0 as x}from"./IconWarning-vA6HsYJq.js";import{L as m}from"./Link-C8m8wITW.js";import{H as s}from"./HeaderNavigation-C6BWzCJk.js";import{B as o}from"./Button-CCZgVc0N.js";import{T as p}from"./Text-CcXeyI30.js";import{I as h}from"./Image-D85ZzrKW.js";import{d as j}from"./dummyText-CX_I_Wpl.js";import{A as f}from"./Avatar-Cg6oWtsy.js";import{a as M,C as I,M as c}from"./ContextMenuContent-B_huxHzb.js";import"./ContextMenuSection-CNQcPdTQ.js";import{a as T,M as k}from"./Modal-D3ypYM_Z.js";import{H}from"./Heading-9sAKSscM.js";import"./index-k6QiPQ3a.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-REkcYbgF.js";import"./mergeRefs-BC_BuoXn.js";import"./index-D2hwKXUM.js";import"./useLocalizedStringFormatter-DJSuZDt4.js";import"./context-1jMNVxHt.js";import"./utils-CpHgE-S6.js";import"./filterDOMProps-i7L6S0l1.js";import"./usePress-DGfPwR5g.js";import"./useFocus-BaJLfW1J.js";import"./useFocusRing-DmvqpG-I.js";import"./useFocusable-C6ZTHalD.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-CRDc6voB.js";import"./Button-CEEqH0ki.js";import"./ProgressBar-Bg2NAwr4.js";import"./Label-DpfcozJA.js";import"./Hidden-ZJTH-wDD.js";import"./useLabel-6-vYiz3X.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./browser-DDZLlA7g.js";import"./EmulatedBoldText-CG9Doyve.js";import"./Text-DWLjOUr2.js";import"./AlertIcon-CnPP9zGs.js";import"./Action-h-c20zp_.js";import"./context-DfZyAinb.js";import"./useStatic-BZhl3rWC.js";import"./getActionGroupSlot-B7TFfcap.js";import"./Popover-Db5mAq-N.js";import"./DialogTriggerView-DpWn2yoK.js";import"./Dialog-DAXkTNx8.js";import"./RSPContexts-z3euxKCR.js";import"./OverlayArrow-CMORky_-.js";import"./useControlledState-Cjeeyz03.js";import"./Collection-ScrsRFZc.js";import"./CollectionBuilder-DQGAitfS.js";import"./Separator-VTYWgg2d.js";import"./Group-DG2VW6yX.js";import"./SearchField-DiZ_IivY.js";import"./FieldError-BmEWAGf_.js";import"./Form-DJ2svD4f.js";import"./useTextField-DUt04o8w.js";import"./useFormReset-CovQJR7M.js";import"./TextField-CoVUwaSO.js";import"./useEvent--O7DxxGG.js";import"./SelectionManager-BpD0kl0T.js";import"./useCollator-bTe8AndB.js";import"./FocusScope-CJ6Nm8ct.js";import"./VisuallyHidden-DD5pbayJ.js";import"./Switch-D96mgkY9.js";import"./Label-CiJybHgW.js";import"./useToggleState-D8ngGgNi.js";import"./Overlay-xS0SGM8W.js";import"./Header-KsmO16G4.js";import"./ButtonView-CJ30fLtu.js";import"./Heading-DFRS6AVv.js";const Rr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(d,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(d,{})}),r.jsx(o,{children:r.jsx(l,{})}),r.jsxs(T,{children:[r.jsx(o,{children:r.jsx(g,{})}),r.jsx(k,{children:r.jsx(H,{children:"Notifications"})})]}),r.jsxs(M,{children:[r.jsx(o,{children:r.jsx(f,{children:r.jsx(h,{alt:"Gopher",src:j.imageSrc})})}),r.jsxs(I,{children:[r.jsxs(c,{children:[r.jsx(u,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(x,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:"{}",...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...n.parameters?.docs?.source}}};const Xr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Xr as __namedExportsOrder,Rr as default};
