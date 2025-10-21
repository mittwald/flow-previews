import{j as r}from"./iframe-DW8JgK09.js";import{t as H,a0 as S,Z as b,E as v,a1 as C}from"./IconWarning-Bj3cOyEj.js";import{L as m}from"./Link-DvwNgxRE.js";import{H as s}from"./HeaderNavigation-Br3Gx_si.js";import{B as o}from"./Button-DVfVMpGI.js";import{T as p}from"./Text-DqrSOA-D.js";import{I as B}from"./Image-Dk9sOsZT.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-Dgp8OFus.js";import{C as y,M as c}from"./MenuItem-CT1sMDGP.js";import{C as A}from"./ContextMenuTrigger-BOTMb5f1.js";import"./ContextMenuSection-CcJ6gQBU.js";import{a as D,M as E}from"./Modal-Dx-v63Da.js";import{H as G}from"./Heading-CaIz_fSc.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./index-7zpoyBXT.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./context-MVg0njeL.js";import"./utils-qQbsMKok.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Gti5y3pG.js";import"./useFocus-BeoGO6Gw.js";import"./useFocusRing-GKfEZ5du.js";import"./useFocusable-ClSVLyWP.js";import"./dynamic-B0cR68qH.js";import"./LoadingSpinner-3AaEPCkk.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-B7FVzAyg.js";import"./ProgressBar-CK1_umDo.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-Ddqyq5_4.js";import"./EmulatedBoldText-C-FDCcHS.js";import"./Text-Dj-iJoJL.js";import"./AlertIcon-BZwyMfyF.js";import"./Action-CbSL4lf7.js";import"./context-BXN8qI2U.js";import"./useStatic-Dd3Fa8_Q.js";import"./getActionGroupSlot-GOPGQ3I0.js";import"./Popover-BwqmKO2L.js";import"./useOverlayController-I2I_tOTO.js";import"./OverlayContextProvider-C8Nzf3Jv.js";import"./Dialog-Ch87mkCh.js";import"./RSPContexts-DSsYPi0N.js";import"./OverlayArrow-Cbixw9Yo.js";import"./useControlledState-BE2AOUIF.js";import"./Collection-C1Fkd8Xr.js";import"./CollectionBuilder-CBDSTuoJ.js";import"./SelectionIndicator-CLj4WkbT.js";import"./Separator-CkUHVVyK.js";import"./SelectionManager-BpH8C0of.js";import"./useEvent-DPuiGjqT.js";import"./useCollator-JcvJSriM.js";import"./FocusScope-BFAEdpe6.js";import"./VisuallyHidden-Da3g07dP.js";import"./ClearPropsContextView-E99s4u78.js";import"./Switch-Cohl0-d8.js";import"./useMakeFocusable-C5ORXLqM.js";import"./useToggleState-D27u0rcM.js";import"./useFormReset-DWeezvOC.js";import"./OverlayTrigger-scn-DxI7.js";import"./ControlledNotification-DddFzpg9.js";import"./DialogTriggerView-BpukwSUt.js";import"./Overlay-md7mOSft.js";import"./ButtonView-CnxufJpx.js";import"./Heading-Dmp-704c.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(A,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(B,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(y,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(C,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(x=e.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var j,f,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    color: "dark"
  },
  globals: {
    backgrounds: "light"
  }
}`,...(M=(f=i.parameters)==null?void 0:f.docs)==null?void 0:M.source}}};var I,T,k;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    color: "light"
  },
  globals: {
    backgrounds: "dark"
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const $r=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,$r as __namedExportsOrder,Yr as default};
