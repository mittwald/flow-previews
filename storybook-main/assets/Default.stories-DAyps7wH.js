import{j as r}from"./iframe-B9WJ5iKj.js";import{u as H,a2 as S,_ as b,E as v,a3 as B}from"./IconWarning-iA3abBs4.js";import{L as m}from"./Link-DXQkeCmn.js";import{H as s}from"./HeaderNavigation-DGiyvSos.js";import{B as o}from"./Button-D_a9cGts.js";import{T as p}from"./Text-CSPzXI-q.js";import{I as C}from"./Image-oJyBsawn.js";import{d as N}from"./dummyText-CX_I_Wpl.js";import{A as L}from"./Avatar-DD1Sc1a5.js";import{a as y,C as A,M as c}from"./ContextMenuContent-F-T1KRd5.js";import"./ContextMenuSection-DlocWNYv.js";import{a as D,M as E}from"./Modal-C_0meTsq.js";import{H as G}from"./Heading-BA4dFWVo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CGbAkxa2.js";import"./mergeRefs-DdPqSpPT.js";import"./index-DKUVlu-x.js";import"./useLocalizedStringFormatter-DFSg5pkm.js";import"./context-B6-GkfV2.js";import"./utils-DB8fltME.js";import"./filterDOMProps-CghfNOdR.js";import"./usePress-Cwd9gmzr.js";import"./useFocus-hMfli9CJ.js";import"./useFocusRing-BfWSMilO.js";import"./useFocusable-uW0l0Nx0.js";import"./dynamic-DKDa4OpU.js";import"./LoadingSpinner-BLFdik4W.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./Button-BgiaEGOw.js";import"./ProgressBar-C1_1cHyi.js";import"./Label-D_4wO_RK.js";import"./Hidden-DsQKnrr0.js";import"./useLabel-oUVSUbln.js";import"./NumberFormatter-DNR9MAW-.js";import"./browser-BOk1fb3_.js";import"./EmulatedBoldText-C7rcw5Ry.js";import"./Text-COQnmlIw.js";import"./AlertIcon-B-Ff_jMN.js";import"./Action-BKjYIDhz.js";import"./context-WaClvBnE.js";import"./useStatic-oaWlYVrV.js";import"./getActionGroupSlot-DpnJzbbM.js";import"./Popover-CeU9-gLu.js";import"./DialogTriggerView-C_MYOBvn.js";import"./Dialog-D5fJjWQP.js";import"./RSPContexts-CDVdjyBw.js";import"./OverlayArrow-CE7drKv_.js";import"./useControlledState-DqBsJvcb.js";import"./Collection-DJgASAUx.js";import"./CollectionBuilder-C14ghNrk.js";import"./Separator-dmjViTlK.js";import"./Group-Cz3tZ_vF.js";import"./SearchField-DA0x0iyL.js";import"./FieldError-DavyfSHK.js";import"./Form-FBD95hlW.js";import"./useTextField-CTUt_DB_.js";import"./useFormReset-X7y3l5xq.js";import"./TextField-DKiK_bQe.js";import"./useEvent-CBc3F-6H.js";import"./SelectionManager-CfvJ92XB.js";import"./useCollator-2x6iNpQz.js";import"./FocusScope-aIFO3fHs.js";import"./VisuallyHidden-BITg658c.js";import"./Switch-D64qVd34.js";import"./Label-Txm3TZUN.js";import"./useToggleState-BHBUTZdp.js";import"./Overlay-CuLQylMk.js";import"./ButtonView-DF5RK9e1.js";import"./Heading-ir8hZIQC.js";const Yr={title:"Navigation/HeaderNavigation",component:s,parameters:{controls:{exclude:["className"]}},render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(m,{href:"#",children:"Getting startet"}),r.jsx(m,{href:"#","aria-current":"page",children:"Components"}),r.jsx(o,{children:r.jsx(H,{})})]}),argTypes:{color:{control:"inline-radio",options:["primary","dark","light"]}}},t={},e={render:a=>r.jsxs(s,{"aria-label":"Header navigation",...a,children:[r.jsx(o,{children:r.jsx(H,{})}),r.jsx(o,{children:r.jsx(S,{})}),r.jsxs(D,{children:[r.jsx(o,{children:r.jsx(b,{})}),r.jsx(E,{children:r.jsx(G,{children:"Notifications"})})]}),r.jsxs(y,{children:[r.jsx(o,{children:r.jsx(L,{children:r.jsx(C,{alt:"Gopher",src:N.imageSrc})})}),r.jsxs(A,{children:[r.jsxs(c,{children:[r.jsx(v,{}),r.jsx(p,{children:"Profile"})]}),r.jsxs(c,{children:[r.jsx(B,{}),r.jsx(p,{children:"Logout"})]})]})]})]})},i={args:{color:"dark"},globals:{backgrounds:"light"}},n={args:{color:"light"},globals:{backgrounds:"dark"}};var d,l,g;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:"{}",...(g=(l=t.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var u,x,h;e.parameters={...e.parameters,docs:{...(u=e.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const Zr=["Default","WithContextMenu","Dark","Light"];export{i as Dark,t as Default,n as Light,e as WithContextMenu,Zr as __namedExportsOrder,Yr as default};
